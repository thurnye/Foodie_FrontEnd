import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { usePDF } from 'react-to-pdf';
import { IRecipe } from '../../../Recipe/types/recipe.types';
import { getFoodLayouts } from '../../components/FoodLayoutSections/FoodLayout';
import { getCoverPageLayouts } from '../../components/CoverPageLayoutSections/Index.CoverPage';
import { getTableOfContentsLayouts } from '../../components/TableOfContentsLayoutSections/Index.TableContent';
import { getIntroPageLayouts } from '../../components/IntroPageLayoutSections/Index.Intro';
import { getBackPageLayouts } from '../../components/BackCoverLayoutSections/index.BackCover';
import { getExtraPageLayouts } from '../../components/ExtraPageLayoutSelections/Index.ExtraLayout';

type PageLayout =
  | 'A3-portrait'
  | 'A3-landscape'
  | 'A4-portrait'
  | 'A4-landscape'
  | 'letter-portrait'
  | 'letter-landscape';

const data: IRecipe = {
  basicInfo: {
    recipeName: 'Smoked Tofu Salad with Spicy Peanut Sauce',
    duration: {
      label: '25 Minutes',
      value: '25',
    },
    level: {
      label: 'Easy',
      value: 'Easy',
    },
    serving: {
      label: '2',
      value: '2',
    },
    tags: [
      {
        label: 'Vegan',
        value: 'Vegan',
      },
      {
        label: 'High Protein',
        value: 'High Protein',
      },
      {
        label: 'Healthy Lunch',
        value: 'Healthy Lunch',
      },
      {
        label: 'Peanut Sauce',
        value: 'Peanut Sauce',
      },
      {
        label: 'Quick Meals',
        value: 'Quick Meals',
      },
    ],
    categories: [
      {
        label: 'Salads',
        value: 'Salads',
      },
      {
        label: 'Lunch',
        value: 'Lunch',
      },
      {
        label: 'Vegan',
        value: 'Vegan',
      },
    ],
  },
  details: {
    thumbnail:
      'http://res.cloudinary.com/xperiacloud/image/upload/v1688927568/l2qgx3ktzkfgwpxxdadx.jpg',
    about: [
      {
        type: 'title',
        value: 'A Refreshing, Protein-Packed Vegan Salad with Bold Flavor',
      },
      {
        type: 'text',
        value:
          'Smoked tofu salad with spicy peanut sauce is a bright, crunchy, and deeply satisfying vegan meal that doesn’t compromise on flavor or nutrition. The smoky tofu adds depth and protein, while the crisp vegetables keep it light and refreshing. The real magic happens with the creamy peanut dressing—it’s savory, slightly sweet, and just spicy enough to wake up your taste buds. In less than 30 minutes, you’ll have a balanced meal that’s both nourishing and energizing. Perfect for weekday lunches, quick dinners, or a wholesome post-workout meal, this salad proves healthy food can be genuinely exciting.',
      },
      {
        type: 'text',
        value:
          'To achieve the best flavor, make sure to pan-sear or air-fry the tofu until golden brown—it creates a light crust that soaks up the peanut sauce beautifully. Don’t skip the fresh herbs either; cilantro and mint give this dish its signature freshness. For a complete meal, serve the salad with brown rice or rice noodles, or enjoy it as-is for a lighter plate. The peanut dressing can also double as a dipping sauce or marinade, making this recipe a versatile addition to your kitchen rotation.',
      },
      {
        type: 'text',
        value:
          'This salad is ideal for meal prep as the vegetables stay crisp for hours and the sauce keeps well for up to five days. Just store them separately to preserve texture. The combination of crunch, creaminess, and subtle spice makes it appealing even to non-vegan eaters. Once you try it, it might just become your go-to quick healthy bowl.',
      },
      {
        type: 'image',
        value: [
          'https://images.unsplash.com/photo-1611075579954-193677c3b7d5?auto=format&fit=crop&w=900&q=80',
        ],
        isUnsplash: true,
        isMultiple: false,
      },
      {
        type: 'video',
        value: 'https://www.youtube.com/watch?v=4SG4O7G9bWs',
      },
    ],
    faqs: [
      {
        ques: 'Can I bake the tofu instead of pan-searing?',
        ans: 'Yes. Bake at 400°F (200°C) for about 20 minutes, flipping halfway, until lightly crisped. This works great if you prefer oil-free cooking.',
      },
      {
        ques: 'How can I make the sauce nut-free?',
        ans: 'You can substitute sunflower seed butter or tahini instead of peanut butter. The flavor will be slightly different but still creamy and delicious.',
      },
      {
        ques: 'What vegetables work best for this salad?',
        ans: 'Fresh, crunchy vegetables like bell peppers, cucumbers, carrots, and cabbage work beautifully. You can also add edamame or shredded lettuce for volume.',
      },
    ],
  },
  nutritionalFacts: [
    {
      name: 'Calories',
      amount: '370',
      unit: 'kcal',
    },
    {
      name: 'Protein',
      amount: '22',
      unit: 'g',
    },
    {
      name: 'Total Fat',
      amount: '23',
      unit: 'g',
    },
    {
      name: 'Saturated Fat',
      amount: '3',
      unit: 'g',
    },
    {
      name: 'Carbohydrates',
      amount: '19',
      unit: 'g',
    },
    {
      name: 'Fiber',
      amount: '5',
      unit: 'g',
    },
    {
      name: 'Sugar',
      amount: '6',
      unit: 'g',
    },
    {
      name: 'Sodium',
      amount: '530',
      unit: 'mg',
    },
    {
      name: 'Calcium',
      amount: '150',
      unit: 'mg',
    },
    {
      name: 'Iron',
      amount: '3.5',
      unit: 'mg',
    },
  ],
  directions: {
    ingredients: [
      {
        name: '200g smoked tofu, pressed and cubed',
        type: 'main',
      },
      {
        name: '3 cups mixed greens (spinach, arugula, or lettuce)',
        type: 'main',
      },
      {
        name: '1 medium carrot, julienned',
        type: 'main',
      },
      {
        name: '½ cucumber, sliced thinly',
        type: 'main',
      },
      {
        name: '½ red bell pepper, thinly sliced',
        type: 'main',
      },
      {
        name: '¼ cup fresh cilantro or mint leaves',
        type: 'main',
      },
      {
        name: '1 tablespoon sesame oil',
        type: 'main',
      },
      {
        name: '2 tablespoons chopped peanuts (for garnish)',
        type: 'main',
      },
      {
        name: '2 tablespoons natural peanut butter',
        type: 'dressing',
      },
      {
        name: '1 tablespoon soy sauce or tamari',
        type: 'dressing',
      },
      {
        name: '1 tablespoon lime juice',
        type: 'dressing',
      },
      {
        name: '1 teaspoon maple syrup or honey',
        type: 'dressing',
      },
      {
        name: '½ teaspoon chili flakes or 1 teaspoon sriracha',
        type: 'dressing',
      },
      {
        name: '1 tablespoon warm water (to thin sauce)',
        type: 'dressing',
      },
      {
        name: '½ teaspoon grated ginger',
        type: 'dressing',
      },
    ],
    methods: [
      {
        step: [
          {
            type: 'title',
            value: 'Step 1: Sear the Tofu',
          },
          {
            type: 'text',
            value:
              'Pat the tofu dry and cut into bite-sized cubes. Heat sesame oil in a non-stick skillet over medium heat. Add tofu and cook for 6–8 minutes, turning occasionally, until golden and crisp on all sides. Remove from heat and set aside to cool slightly.',
          },
          {
            type: 'image',
            value:
              'https://images.unsplash.com/photo-1587650635594-7c805cd0efb7?auto=format&fit=crop&w=900&q=80',
            isUnsplash: true,
          },
        ],
      },
      {
        step: [
          {
            type: 'title',
            value: 'Step 2: Prepare the Peanut Sauce',
          },
          {
            type: 'text',
            value:
              'In a small mixing bowl, combine peanut butter, soy sauce, lime juice, maple syrup, chili flakes, and grated ginger. Whisk together until smooth. Add warm water a little at a time until you get a creamy, pourable consistency. Taste and adjust spice or sweetness to your preference.',
          },
        ],
      },
      {
        step: [
          {
            type: 'title',
            value: 'Step 3: Assemble the Salad',
          },
          {
            type: 'text',
            value:
              'In a large salad bowl, toss together the mixed greens, carrots, cucumber, and red bell pepper. Add the tofu cubes and drizzle the peanut sauce over the top. Gently toss to coat evenly.',
          },
        ],
      },
      {
        step: [
          {
            type: 'title',
            value: 'Step 4: Garnish and Serve',
          },
          {
            type: 'text',
            value:
              'Top the salad with fresh cilantro or mint and a sprinkle of chopped peanuts. Serve immediately, or refrigerate for up to 2 hours before eating. The flavors intensify as it sits, making it even more delicious.',
          },
        ],
      },
    ],
  },
  _id: '',
  author: {
    userId: 'string',
    username: 'string',
    firstName: 'string',
    lastName: 'string',
    avatar: 'string',
    slogan: 'string',
  },
};

// Page dimensions in pixels (at 96 DPI)
const PAGE_DIMENSIONS: Record<
  PageLayout,
  { width: number; height: number; maxContentHeight: number }
> = {
  'A3-portrait': { width: 1123, height: 1587, maxContentHeight: 1487 },
  'A3-landscape': { width: 1587, height: 1123, maxContentHeight: 1023 },
  'A4-portrait': { width: 794, height: 1123, maxContentHeight: 1050 },
  'A4-landscape': { width: 1123, height: 794, maxContentHeight: 720 },
  'letter-portrait': { width: 816, height: 1056, maxContentHeight: 980 },
  'letter-landscape': { width: 1056, height: 816, maxContentHeight: 740 },
};

// Split recipe into sections for pagination
const getRecipeSections = (recipe: IRecipe) => {
  const sections: React.ReactNode[] = [];

  // --- Cover Layout Pages ---
  const coverLayouts = getCoverPageLayouts();
  coverLayouts.forEach((layout, index) => {
    sections.push(<React.Fragment key={`coverPage`}>{layout}</React.Fragment>);
  });

  // --- Welcome Layout Pages ---
  const introLayouts = getIntroPageLayouts();
  introLayouts.forEach((layout, index) => {
    sections.push(<React.Fragment key={`welcome`}>{layout}</React.Fragment>);
  });

  // Table of contents pages
  const tocPages = getTableOfContentsLayouts(data);
  tocPages.forEach((page: any, index: number) => {
    sections.push(
      <React.Fragment key={`tableOfContent`}>{page}</React.Fragment>
    );
  });

  // --- Food Layout Pages ---
  const foodLayouts = getFoodLayouts(data);
  foodLayouts.forEach((layout, index) => {
    sections.push(
      <React.Fragment key={`food-layout-${index + 1}`}>{layout}</React.Fragment>
    );
  });
  // --- Food Layout Pages ---
  const extraLayouts = getExtraPageLayouts();
  extraLayouts.forEach((layout, index) => {
    sections.push(
      <React.Fragment key={`food-layout-${index + 1}`}>{layout}</React.Fragment>
    );
  });
  // --- Back Cover Page ---
  const backPageLayouts = getBackPageLayouts();
  backPageLayouts.forEach((layout, index) => {
    sections.push(<React.Fragment key={`backCover`}>{layout}</React.Fragment>);
  });

  return sections;
};

export default function NewRustic() {
  const [pages, setPages] = useState<string[]>(['']);
  const [pageLayout, setPageLayout] = useState<PageLayout>('A3-landscape');
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [recipeJson, setRecipeJson] = useState<string>('');
  const [recipeData, setRecipeData] = useState<IRecipe | null>(null);
  const fullTextRef = useRef<string>(''); // store full text without triggering re-render
  const measureRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const caretPositionRef = useRef<number>(0); // store caret position
  const isUpdatingRef = useRef<boolean>(false); // prevent loops

  const currentDimensions = PAGE_DIMENSIONS[pageLayout];
  const pdfFormat = pageLayout.split('-')[0].toUpperCase() as
    | 'A3'
    | 'A4'
    | 'LETTER';
  const pdfOrientation = pageLayout.split('-')[1] as 'portrait' | 'landscape';

  const { toPDF, targetRef } = usePDF({
    filename: `document-${pageLayout}.pdf`,
    page: { format: pdfFormat, orientation: pdfOrientation },
  });

  // Save caret position relative to the full text
  const saveCaretPosition = () => {
    const selection = window.getSelection();
    if (!selection || !editorRef.current) return;

    try {
      const range = selection.getRangeAt(0);
      const preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(editorRef.current);
      preCaretRange.setEnd(range.endContainer, range.endOffset);

      // Calculate position in full text
      const previousPagesText = pages.slice(0, -1).join(' ');
      const offsetFromPreviousPages = previousPagesText
        ? previousPagesText.length + 1
        : 0;
      const caretInLastPage = preCaretRange.toString().length;
      caretPositionRef.current = offsetFromPreviousPages + caretInLastPage;
    } catch (e) {
      // Ignore errors
    }
  };

  // Restore caret position
  const restoreCaretPosition = () => {
    if (!editorRef.current) return;

    const selection = window.getSelection();
    if (!selection) return;

    try {
      // Calculate where caret should be in the last page
      const previousPagesText = pages.slice(0, -1).join(' ');
      const offsetFromPreviousPages = previousPagesText
        ? previousPagesText.length + 1
        : 0;
      let targetPosition = Math.max(
        0,
        caretPositionRef.current - offsetFromPreviousPages
      );

      // Clamp to last page length
      const lastPageText = pages[pages.length - 1] || '';
      targetPosition = Math.min(targetPosition, lastPageText.length);

      // If editor is empty or has no text nodes, we can't restore
      if (!editorRef.current.firstChild) {
        return;
      }

      // Find the text node and offset
      let charCount = 0;
      const findPosition = (
        node: Node
      ): { node: Node; offset: number } | null => {
        if (node.nodeType === Node.TEXT_NODE) {
          const textLength = node.textContent?.length || 0;
          if (charCount + textLength >= targetPosition) {
            return {
              node,
              offset: Math.min(targetPosition - charCount, textLength),
            };
          }
          charCount += textLength;
        } else {
          for (let i = 0; i < node.childNodes.length; i++) {
            const result = findPosition(node.childNodes[i]);
            if (result) return result;
          }
        }
        return null;
      };

      const position = findPosition(editorRef.current);
      if (position) {
        const range = document.createRange();
        range.setStart(position.node, position.offset);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      } else {
        // Fallback: place cursor at the end
        const lastChild = editorRef.current.lastChild;
        if (lastChild && lastChild.nodeType === Node.TEXT_NODE) {
          const range = document.createRange();
          const textLength = lastChild.textContent?.length || 0;
          range.setStart(lastChild, Math.min(targetPosition, textLength));
          range.collapse(true);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
    } catch (e) {
      console.error('Error restoring caret position:', e);
    }
  };

  const paginate = (text: string) => {
    if (!measureRef.current) return;
    const words = text.split(' ');
    const chunks: string[] = [];
    let current = '';
    const measureDiv = measureRef.current;
    measureDiv.innerHTML = '';

    words.forEach((word) => {
      measureDiv.innerText = current + ' ' + word;
      if (measureDiv.scrollHeight > currentDimensions.maxContentHeight) {
        chunks.push(current.trim());
        current = word;
        measureDiv.innerText = word;
      } else {
        current += ' ' + word;
      }
    });

    if (current.trim()) chunks.push(current.trim());
    if (chunks.length === 0) chunks.push('');
    setPages(chunks);
  };

  const handleInput = () => {
    if (!editorRef.current || isUpdatingRef.current) return;

    // Save caret position immediately when user types
    saveCaretPosition();

    // Combine all previous pages' content with current editable content
    const previousPagesText = pages.slice(0, -1).join(' ');
    const currentEditableText = editorRef.current.innerText;
    const fullText = previousPagesText
      ? previousPagesText + ' ' + currentEditableText
      : currentEditableText;

    fullTextRef.current = fullText;
    paginate(fullText);
  };

  // Handle recipe import
  const handleImportRecipe = () => {
    try {
      const recipe: IRecipe = JSON.parse(recipeJson);
      setRecipeData(recipe);
      setImportDialogOpen(false);
      setRecipeJson('');
    } catch (error) {
      alert('Invalid JSON format. Please check your recipe data.');
      console.error('Recipe import error:', error);
    }
  };

  // Load sample recipe data on mount
  useEffect(() => {
    setRecipeData(data as IRecipe);
  }, []);

  // Re-paginate when page layout changes
  useEffect(() => {
    if (fullTextRef.current) {
      saveCaretPosition();
      paginate(fullTextRef.current);
    }
  }, [pageLayout]);

  // Restore caret position after pages update
  useEffect(() => {
    if (!editorRef.current) return;

    const lastPageContent = pages[pages.length - 1] || '';
    const currentContent = editorRef.current.innerText;

    // Only update content if it actually differs (trim to handle whitespace)
    const contentDiffers = currentContent.trim() !== lastPageContent.trim();

    if (contentDiffers) {
      // Content has changed due to pagination - update it
      isUpdatingRef.current = true;
      editorRef.current.innerText = lastPageContent;

      // Restore caret after content update
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          restoreCaretPosition();
          isUpdatingRef.current = false;
        });
      });
    } else {
      // Content is the same - just restore caret without updating DOM
      isUpdatingRef.current = false;
    }
  }, [pages]);

  return (
    <Box sx={{ p: 4, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant='h4' textAlign='center' gutterBottom>
        Word-Like Editor (Smooth Typing + Pagination)
      </Typography>

      {/* Page Layout Selector and Import Button */}
      <Box
        sx={{ maxWidth: '600px', mx: 'auto', mb: 3, display: 'flex', gap: 2 }}
      >
        <FormControl fullWidth>
          <InputLabel>Page Layout</InputLabel>
          <Select
            value={pageLayout}
            label='Page Layout'
            onChange={(e) => setPageLayout(e.target.value as PageLayout)}
          >
            <MenuItem value='A4-portrait'>A4 - Portrait</MenuItem>
            <MenuItem value='A4-landscape'>A4 - Landscape</MenuItem>
            <MenuItem value='A3-portrait'>A3 - Portrait</MenuItem>
            <MenuItem value='A3-landscape'>A3 - Landscape</MenuItem>
            <MenuItem value='letter-portrait'>US Letter - Portrait</MenuItem>
            <MenuItem value='letter-landscape'>US Letter - Landscape</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant='outlined'
          onClick={() => setImportDialogOpen(true)}
          sx={{ whiteSpace: 'nowrap' }}
        >
          Import Recipe
        </Button>

        {recipeData && (
          <Button
            variant='outlined'
            color='secondary'
            onClick={() => setRecipeData(null)}
            sx={{ whiteSpace: 'nowrap' }}
          >
            Clear Recipe
          </Button>
        )}
      </Box>

      {/* Hidden measurement element */}
      <div
        ref={measureRef}
        style={{
          position: 'absolute',
          visibility: 'hidden',
          width: `${currentDimensions.width}px`,
          padding: '32px',
          whiteSpace: 'pre-wrap',
          lineHeight: 1.5,
        }}
      />

      <Box ref={targetRef}>
        {recipeData ? (
          <Box
            key={pageLayout}
            sx={{
              mx: 'auto',
            }}
          >
            {/* Distribute sections across pages */}
            {(() => {
              const sections = getRecipeSections(recipeData);
              const pages: React.ReactNode[][] = [];

              // Dedicated full-page sections
              const dedicatedPageKeys = [
                'coverPage',
                'welcome',
                'tableOfContent',
                'backCover',
              ];

              sections.forEach((section: any) => {
                const sectionKey = section?.key || '';
                const isDedicatedPage = dedicatedPageKeys.includes(sectionKey);
                const isFoodSection = sectionKey.startsWith('food-');

                if (isDedicatedPage) {
                  // Dedicated pages get their own full page
                  pages.push([section]);
                } else if (isFoodSection) {
                  // Each food section starts on a new page
                  pages.push([section]);
                } else {
                  // Group content sections together on pages (max 2-3 per page)
                  const lastPage = pages[pages.length - 1];
                  const lastPageHasDedicated =
                    lastPage &&
                    lastPage.some((s: any) =>
                      dedicatedPageKeys.includes(s?.key)
                    );
                  const lastPageHasFood =
                    lastPage &&
                    lastPage.some((s: any) => s?.key?.startsWith('food-'));

                  if (
                    !lastPage ||
                    lastPageHasDedicated ||
                    lastPageHasFood ||
                    lastPage.length >= 2
                  ) {
                    // Start new page
                    pages.push([section]);
                  } else {
                    // Add to existing page
                    lastPage.push(section);
                  }
                }
              });

              return pages.map((pageSections, pageIdx) => {
                const hasDedicatedPage = pageSections.some((s: any) =>
                  dedicatedPageKeys.includes(s?.key)
                );

                // A4 Portrait dimensions for dedicated pages (always fixed)
                const A4_PORTRAIT = { width: 794, height: 1123 };

                // Dedicated pages always use A4 portrait, content pages use selected layout
                const pageWidth = hasDedicatedPage
                  ? A4_PORTRAIT.width
                  : currentDimensions.width;
                const pageHeight = hasDedicatedPage
                  ? A4_PORTRAIT.height
                  : currentDimensions.height;

                return (
                  <Paper
                    key={`${pageLayout}-page-${pageIdx}`}
                    sx={{
                      width: `${pageWidth}px`,
                      height: hasDedicatedPage ? `${pageHeight}px` : 'auto',
                      minHeight: hasDedicatedPage
                        ? `${pageHeight}px`
                        : `${pageHeight}px`,
                      maxHeight: hasDedicatedPage ? `${pageHeight}px` : 'none',
                      mb: 4,
                      bgcolor: '#fff',
                      position: 'relative',
                      overflow: hasDedicatedPage ? 'hidden' : 'visible',
                      boxShadow: 3,
                      mx: 'auto',
                    }}
                    elevation={3}
                  >
                    <Box
                      sx={{
                        height: hasDedicatedPage ? '100%' : 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                      }}
                    >
                      {pageSections}
                    </Box>

                    <Typography
                      variant='caption'
                      sx={{
                        position: 'absolute',
                        bottom: 8,
                        right: 16,
                        color: 'gray',
                        background: '#fff',
                        padding: '2px 8px',
                        borderRadius: 1,
                        fontSize: '11px',
                      }}
                    >
                      Page {pageIdx + 1}
                    </Typography>
                  </Paper>
                );
              });
            })()}
          </Box>
        ) : (
          pages.map((content, i) => (
            <Paper
              key={i}
              sx={{
                width: `${currentDimensions.width}px`,
                height: `${currentDimensions.height}px`,
                mx: 'auto',
                mb: 4,
                p: 4,
                bgcolor: '#fff',
                position: 'relative',
                overflow: 'hidden',
              }}
              elevation={3}
            >
              {/* Editable only on the last visible page */}
              {i === pages.length - 1 ? (
                <div
                  ref={editorRef}
                  contentEditable
                  suppressContentEditableWarning
                  onInput={handleInput}
                  style={{
                    outline: 'none',
                    whiteSpace: 'pre-wrap',
                    lineHeight: 1.6,
                    minHeight: '100%',
                    width: '100%',
                    overflowWrap: 'break-word',
                  }}
                />
              ) : (
                <Box
                  sx={{
                    whiteSpace: 'pre-wrap',
                    lineHeight: 1.6,
                    userSelect: 'none',
                  }}
                >
                  {content}
                </Box>
              )}
              <Typography
                variant='caption'
                sx={{
                  position: 'absolute',
                  bottom: 8,
                  right: 16,
                  color: 'gray',
                }}
              >
                Page {i + 1}
              </Typography>
            </Paper>
          ))
        )}
      </Box>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant='contained' onClick={() => toPDF()}>
          Download {pdfFormat} PDF ({pdfOrientation})
        </Button>
      </Box>

      {/* Import Recipe Dialog */}
      <Dialog
        open={importDialogOpen}
        onClose={() => setImportDialogOpen(false)}
        maxWidth='md'
        fullWidth
      >
        <DialogTitle>Import Recipe JSON</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            label='Paste Recipe JSON Here'
            fullWidth
            multiline
            rows={15}
            value={recipeJson}
            onChange={(e) => setRecipeJson(e.target.value)}
            placeholder='Paste your recipe JSON data here...'
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setImportDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleImportRecipe} variant='contained'>
            Import
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
