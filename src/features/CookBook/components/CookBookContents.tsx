import React from 'react';
import { Box, Typography } from '@mui/material';
import { IRecipe } from '../../Recipe/types/recipe.types';
import { ICookbook } from '../types/cookbook.types';

interface ICookBookContents {
  selectedSection: string | null;
  currentCookbook: ICookbook | null;
  editorContents: string;
}

const CookBookContents: React.FC<ICookBookContents> = ({
  selectedSection,
  currentCookbook,
  editorContents,
}) => {
  return (
    <Box
      sx={{
        flex: 1,
        overflow: 'auto',
        p: 4,
        backgroundColor: '#1e1e1e',
      }}
    >
      <Box
        sx={{
          maxWidth: 800,
          mx: 'auto',
          backgroundColor: '#252525',
          borderRadius: 2,
          p: 4,
          minHeight: '100%',
        }}
      >
        {selectedSection === 'cover' && (
          <Box>
            <Typography variant='h4' sx={{ mb: 2, fontWeight: 700 }}>
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
                  mb: 3,
                }}
              />
            )}
            <Typography
              sx={{ color: '#9ca3af', lineHeight: 1.8, fontSize: '1rem' }}
            >
              {editorContents || 'Add a description for your cookbook...'}
            </Typography>
          </Box>
        )}

        {selectedSection === 'intro' && (
          <Box>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Introduction
            </Typography>
            <Typography
              sx={{ color: '#9ca3af', lineHeight: 1.8, fontSize: '1rem' }}
            >
              {editorContents || 'Write an introduction to your cookbook...'}
            </Typography>
          </Box>
        )}

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
                    {recipeObj?.basicInfo?.recipeName || `Recipe ${index + 1}`}
                  </Typography>
                  <Typography sx={{ color: '#6b7280' }}>{index + 1}</Typography>
                </Box>
              );
            })}
          </Box>
        )}

        {selectedSection === 'notes' && (
          <Box>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Notes
            </Typography>
            <Typography
              sx={{ color: '#9ca3af', lineHeight: 1.8, fontSize: '1rem' }}
            >
              {editorContents}
            </Typography>
          </Box>
        )}

        {selectedSection &&
          selectedSection !== 'cover' &&
          selectedSection !== 'intro' &&
          selectedSection !== 'toc' &&
          selectedSection !== 'notes' && (
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
  );
};

export default CookBookContents;
