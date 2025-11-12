const fs = require('fs');
const path = require('path');

// --- Helpers ---

// Normalize recipe names (remove punctuation, collapse spaces, lowercase)
function normalizeName(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '') // remove quotes/apostrophes
    .replace(/[^a-z0-9]+/g, ' ') // replace punctuation/hyphens/etc with space
    .replace(/\s+/g, ' ') // collapse multiple spaces
    .trim();
}

// String similarity (Levenshtein distance)
function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) costs[j] = j;
      else if (j > 0) {
        let newValue = costs[j - 1];
        if (s1[i - 1] !== s2[j - 1]) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        }
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

function similarity(a, b) {
  const longer = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;
  const longerLength = longer.length;
  if (longerLength === 0) return 1.0;
  return (longerLength - editDistance(longer, shorter)) / longerLength;
}

// --- Load Data ---
const recipeFoodieData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../backup/FoodieBlog.recipes_backup.json'), 'utf-8')
);

let realisticRecipes = require('../backup/RealisticRecipes.js');
if (realisticRecipes.realisticRecipes) realisticRecipes = realisticRecipes.realisticRecipes;

// --- Merge Logic ---
const unmatched = [];
const updatedNames = [];

const updatedData = recipeFoodieData.map((item) => {
  const originalName = normalizeName(item.basicInfo.recipeName);

  let match = realisticRecipes.find(
    (recp) => normalizeName(recp.basicInfo.recipeName) === originalName
  );

  // Fuzzy fallback
  if (!match) {
    match = realisticRecipes.find(
      (recp) => similarity(normalizeName(recp.basicInfo.recipeName), originalName) > 0.9
    );
  }

  if (match) {
    const { basicInfo, details, nutritionalFacts, directions } = match;
    updatedNames.push(item.basicInfo.recipeName);

    // ✅ Adjust only "image" blocks in details.about
    const processedAbout = (details.about || []).map((block) => {
      if (block.type === 'image') {
        let imageArray = [];

        // Normalize value to always be an array of strings
        if (Array.isArray(block.value)) {
          imageArray = block.value.filter((v) => typeof v === 'string' && v.trim());
        } else if (typeof block.value === 'string' && block.value.trim()) {
          imageArray = [block.value.trim()];
        }

        // Flags
        const isUnsplash = imageArray.some((url) =>
          url.includes('images.unsplash.com')
        );
        const isMultiple = imageArray.length > 1;

        return {
          ...block,
          value: imageArray,
          isUnsplash,
          isMultiple,
        };
      }

      // Keep non-image blocks untouched
      return block;
    });

    return {
      ...item,
      basicInfo,
      details: {
        ...item.details,
        about: processedAbout,
        faqs: details.faqs,
      },
      nutritionalFacts,
      directions,
      updatedAt: { $date: new Date().toISOString() },
    };
  } else {
    unmatched.push(item.basicInfo.recipeName);
    return item; // leave unchanged
  }
});

// --- Collect unique categories & tags ---
const uniqueCategories = new Set();
const uniqueTags = new Set();

updatedData.forEach((item) => {
  const { categories = [], tags = [] } = item.basicInfo || {};
  categories.forEach((cat) => {
    if (cat?.value) uniqueCategories.add(cat.value.trim());
    else if (typeof cat === 'string') uniqueCategories.add(cat.trim());
  });
  tags.forEach((tag) => {
    if (tag?.value) uniqueTags.add(tag.value.trim());
    else if (typeof tag === 'string') uniqueTags.add(tag.trim());
  });
});

// console.log('\n📦 Unique Categories:', uniqueCategories.size);
// console.log([...uniqueCategories].sort().join(', '));

// console.log('\n🏷️  Unique Tags:', uniqueTags.size);
// console.log([...uniqueTags].sort().join(', '));

// --- Save Output ---
const outputPath = path.resolve(__dirname, 'updatedRecipeFoodieData.json');
fs.writeFileSync(outputPath, JSON.stringify(updatedData, null, 2), 'utf-8');

// --- Logs ---
console.log(`\n✅ File created successfully: ${outputPath}`);
console.log(`✅ Updated recipes: ${updatedNames.length}`);
console.log(`⚠️  Unmatched recipes: ${unmatched.length}`);
if (unmatched.length > 0) {
  console.log('\n⚠️  Unmatched Recipe Names:\n', unmatched.join('\n'));
}
