

const fs = require('fs');
const cats = ['Popular', 'Pizza', 'Meat', 'Lunch', 'Greens', 'Desserts', 'Snacks', 'Waffles', 'Breakfast', 'Cakes',
'Fast To Make', 'Grains', 'Pies', 'Sweets', 'Dinner']

// const path = '../images/allCategories'



function createFolder(folderPath, name) {
  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.error('Error creating folder:', err);
    } else {
      console.log(`${name} Folder created successfully`);
    }
  });
}

cats.forEach((el) => {
    const path = `../images/allCategories/${el}`
    createFolder(path, el);
})

// Usage example