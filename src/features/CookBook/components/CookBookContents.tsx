import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { IRecipe } from '../../Recipe/types/recipe.types';
import { ICookbook } from '../types/cookbook.types';
import TextEditor from '../../../app/components/TextEditor';

interface ICookBookContents {
  selectedSection: string | null;
  currentCookbook: ICookbook | null;
  editorContents: string;
  onContentChange?: (content: string) => void;
}

const CookBookContents: React.FC<ICookBookContents> = ({
  selectedSection,
  currentCookbook,
  editorContents,
  onContentChange,
}) => {
  // Convert recipe to HTML for editing
  const getRecipeHTML = (recipe: IRecipe): string => {
    // Generate ingredients list
    const ingredients = recipe.directions.ingredients
      .map((ing) => `<li>${ing.name} (${ing.type})</li>`)
      .join('');

    // Generate about section with text and images
    const aboutContent = recipe.details.about
      .map((item: any) => {
        if (item.type === 'text') {
          return `<p>${item.value}</p>`;
        } else if (item.type === 'image') {
          // Handle single or multiple images
          if (Array.isArray(item.value)) {
            const images = item.value
              .map(
                (imgUrl: string) =>
                  `<div style="flex: 1; min-width: 200px; max-width: 48%;">
                    <img src="${imgUrl}" alt="${recipe.basicInfo.recipeName}" style="width: 100%; height: auto; border-radius: 8px; object-fit: cover;" />
                  </div>`
              )
              .join('');
            return `<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; margin: 20px auto; max-width: 100%;">
              ${images}
            </div>`;
          } else {
            return `<div style="display: flex; justify-content: center; margin: 20px auto; max-width: 600px;">
              <img src="${item.value}" alt="${recipe.basicInfo.recipeName}" style="width: 100%; border-radius: 8px;" />
            </div>`;
          }
        }
        return '';
      })
      .join('');

    // Generate instructions with titles, text, and images
    const instructions = recipe.directions.methods
      .map((method: any, methodIdx: number) => {
        const stepContent = method.step
          .map((stepItem: any) => {
            if (stepItem.type === 'title') {
              return `<h3 style="margin-top: 20px; color: #3b82f6;">${stepItem.value}</h3>`;
            } else if (stepItem.type === 'text') {
              return `<p style="margin: 10px 0;">${stepItem.value}</p>`;
            } else if (stepItem.type === 'image') {
              // Handle single or multiple images
              if (Array.isArray(stepItem.value)) {
                const images = stepItem.value
                  .map(
                    (imgUrl: string) =>
                      `<div style="flex: 1; min-width: 200px; max-width: 48%;">
                        <img src="${imgUrl}" alt="Step ${methodIdx + 1}" style="width: 100%; height: auto; border-radius: 8px; object-fit: cover;" />
                      </div>`
                  )
                  .join('');
                return `<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; margin: 20px auto; max-width: 100%;">
                  ${images}
                </div>`;
              } else {
                return `<div style="display: flex; justify-content: center; margin: 20px auto; max-width: 600px;">
                  <img src="${stepItem.value}" alt="Step ${methodIdx + 1}" style="width: 100%; border-radius: 8px;" />
                </div>`;
              }
            }
            return '';
          })
          .join('');

        return `<li style="margin-bottom: 20px;">${stepContent}</li>`;
      })
      .join('');

    return `
      <h1>${recipe.basicInfo.recipeName}</h1>
      ${
        recipe.details.thumbnail
          ? `<img src="${recipe.details.thumbnail}" alt="${recipe.basicInfo.recipeName}" style="max-width: 100%; border-radius: 8px; margin-bottom: 20px;" />`
          : ''
      }

      <div style="margin-bottom: 30px;">
        ${aboutContent}
      </div>

      <h2>Ingredients</h2>
      <ul>${ingredients}</ul>

      <h2>Instructions</h2>
      <ol style="list-style-position: outside; padding-left: 24px;">
        ${instructions}
      </ol>

      <h2>Additional Notes</h2>
      <p>Add any modifications, tips, or notes about this recipe here...</p>
    `;
  };

  // Check if current section is a recipe
  const currentRecipe = currentCookbook?.recipes.find((r) =>
    typeof r === 'string' ? r === selectedSection : r._id === selectedSection
  ) as IRecipe | undefined;

  const isRecipeSection = !!(
    selectedSection &&
    selectedSection !== 'cover' &&
    selectedSection !== 'intro' &&
    selectedSection !== 'toc' &&
    selectedSection !== 'notes' &&
    currentRecipe &&
    typeof currentRecipe !== 'string'
  );

  // Determine if current section is editable
  const isEditableSection =
    ['cover', 'intro', 'notes'].includes(selectedSection || '') ||
    isRecipeSection;

  // Calculate content synchronously during render (not in useEffect)
  // This ensures TextEditor gets the correct content on mount
  const getDisplayContent = (): string => {
    // For recipe sections, generate HTML from recipe data
    if (isRecipeSection && currentRecipe && typeof currentRecipe !== 'string') {
      const recipeHTML = getRecipeHTML(currentRecipe);

      // Use edited content if it exists and has been modified by user
      const hasEditedContent = editorContents &&
                               editorContents.trim() !== '' &&
                               !editorContents.includes('Add any modifications, tips, or notes');

      console.log('CookBookContents - Recipe section:', {
        selectedSection,
        recipeName: currentRecipe.basicInfo.recipeName,
        recipeHTMLLength: recipeHTML.length,
        editorContentsLength: editorContents?.length,
        hasEditedContent,
        willUseHTML: !hasEditedContent
      });

      return hasEditedContent ? editorContents : recipeHTML;
    }

    // For non-recipe sections
    console.log('CookBookContents - Non-recipe section:', {
      selectedSection,
      isRecipeSection,
      editorContentsLength: editorContents?.length
    });

    return editorContents || '';
  };

  const localContent = getDisplayContent();

  const handleContentChange = (content: string) => {
    // Pass content change up to parent
    if (onContentChange) {
      onContentChange(content);
    }
  };

  const getPlaceholder = (): string => {
    if (selectedSection === 'cover')
      return 'Add a description for your cookbook...';
    if (selectedSection === 'intro')
      return 'Write an introduction to your cookbook...';
    if (selectedSection === 'notes') return 'Add any additional notes here...';
    if (isRecipeSection)
      return 'Edit this recipe. You can modify ingredients, instructions, or add notes...';
    return 'Start typing...';
  };

  // Log before rendering for debugging
  console.log(
    'Rendering TextEditor with key:',
    selectedSection,
    'content length:',
    localContent?.length
  );

  return (
    <Box
      sx={{
        flex: 1,
        height: '100%',
        overflow: 'hidden',
        backgroundColor: '#1e1e1e',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {isEditableSection ? (
        // Render TextEditor for editable sections
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2, overflow: 'hidden' }}>
          {selectedSection === 'cover' && !isRecipeSection && (
            <Box sx={{ mb: 2 }}>
              <Typography
                variant='h4'
                sx={{ mb: 2, fontWeight: 700, color: '#e0e0e0' }}
              >
                {currentCookbook?.title}
              </Typography>
              {currentCookbook?.coverImage && (
                <Box
                  component='img'
                  src={currentCookbook.coverImage}
                  alt='Cover'
                  sx={{
                    width: '100%',
                    maxHeight: 400,
                    objectFit: 'cover',
                    borderRadius: 2,
                    mb: 2,
                  }}
                />
              )}
            </Box>
          )}

          {selectedSection === 'intro' && (
            <Typography
              variant='h5'
              sx={{ mb: 2, fontWeight: 600, color: '#e0e0e0' }}
            >
              Introduction
            </Typography>
          )}

          {selectedSection === 'notes' && (
            <Typography
              variant='h5'
              sx={{ mb: 2, fontWeight: 600, color: '#e0e0e0' }}
            >
              Notes
            </Typography>
          )}

          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <TextEditor
              key={selectedSection} // Force re-render when section changes
              getContents={handleContentChange}
              defaultValue={localContent}
              height='100%'
              placeholder={getPlaceholder()}
              layout={currentCookbook?.layout}
            />
          </Box>
        </Box>
      ) : (
        // Render static content for non-editable sections
        <Box
          sx={{
            flex: 1,
            overflow: 'auto',
            p: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box
            sx={{
              maxWidth: 800,
              mx: 'auto',
              backgroundColor: '#252525',
              borderRadius: 2,
              p: { xs: 2, sm: 3, md: 4 },
              minHeight: '100%',
            }}
          >
            {selectedSection === 'toc' && (
              <Box>
                <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
                  Table of Contents
                </Typography>
                {currentCookbook?.recipes.map((recipe, index) => {
                  const recipeObj =
                    typeof recipe === 'string' ? null : (recipe as IRecipe);
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        py: 1.5,
                        borderBottom: '1px solid #3a3a3a',
                      }}
                    >
                      <Typography>
                        {recipeObj?.basicInfo?.recipeName ||
                          `Recipe ${index + 1}`}
                      </Typography>
                      <Typography sx={{ color: '#6b7280' }}>
                        {index + 1}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            )}

            {selectedSection && selectedSection !== 'toc' && (
              <Box>
                {(() => {
                  const recipe = currentCookbook?.recipes.find((r) =>
                    typeof r === 'string'
                      ? r === selectedSection
                      : r._id === selectedSection
                  ) as IRecipe | undefined;

                  if (!recipe || typeof recipe === 'string') {
                    return (
                      <Typography sx={{ color: '#6b7280' }}>
                        Recipe not found
                      </Typography>
                    );
                  }

                  return (
                    <Box>
                      <Typography variant='h4' sx={{ mb: 2, fontWeight: 700 }}>
                        {recipe.basicInfo.recipeName}
                      </Typography>
                      {recipe.details.thumbnail && (
                        <Box
                          component='img'
                          src={recipe.details.thumbnail}
                          alt={recipe.basicInfo.recipeName}
                          sx={{
                            width: '100%',
                            maxHeight: 400,
                            objectFit: 'cover',
                            borderRadius: 2,
                            mb: 3,
                          }}
                        />
                      )}
                      <Typography
                        variant='subtitle1'
                        sx={{ mb: 3, color: '#9ca3af' }}
                      >
                        {recipe.details.about?.[0]?.value ||
                          'No description available'}
                      </Typography>

                      <Typography variant='h6' sx={{ mb: 2, fontWeight: 600 }}>
                        Ingredients
                      </Typography>
                      <Box component='ul' sx={{ mb: 3, pl: 3 }}>
                        {recipe.directions.ingredients.map((ing, idx) => (
                          <li key={idx}>
                            <Typography sx={{ color: '#e0e0e0', mb: 1 }}>
                              {ing.name} ({ing.type})
                            </Typography>
                          </li>
                        ))}
                      </Box>

                      <Typography variant='h6' sx={{ mb: 2, fontWeight: 600 }}>
                        Instructions
                      </Typography>
                      <Box component='ol' sx={{ pl: 3 }}>
                        {recipe.directions.methods.map((method, idx) => (
                          <li key={idx}>
                            <Typography sx={{ color: '#e0e0e0', mb: 2 }}>
                              {method.step.map((s) => s.value).join(' ')}
                            </Typography>
                          </li>
                        ))}
                      </Box>
                    </Box>
                  );
                })()}
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CookBookContents;
