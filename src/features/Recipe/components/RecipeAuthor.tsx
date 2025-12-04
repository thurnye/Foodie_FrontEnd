import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Signature from '../../../public/images/signature.png';
import { useAppSelector } from '../../../app/hooks/app.hooks';
import BorderBoxTextLayout from '../../../app/components/Layouts/BorderBoxTextLayout';

const RecipeAuthor: React.FC = () => {
  const author = useAppSelector(
    (state) => state.recipe.currentRecipe?.author ?? null
  );

  return (
    <>
      <BorderBoxTextLayout title='ABOUT ME'>
        <Box>
          {author && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Box
                component={Link}
                to={{
                  pathname: '/author',
                  search: `?q=${author.firstName.replaceAll(' ', '-')}`,
                }}
                state={{ authorId: author.userId }}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: 3,
                }}
              >
                <Box
                  component='img'
                  src={author.avatar}
                  alt='author-avatar'
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid #eee',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              </Box>

              <Typography
                variant='h5'
                sx={{
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                Hi! I’m {author.firstName}.
              </Typography>

              {author.slogan && (
                <Typography
                  variant='body2'
                  sx={{
                    fontStyle: 'italic',
                    color: 'text.secondary',
                    mb: 3,
                    maxWidth: 300,
                  }}
                >
                  “{author.slogan}”
                </Typography>
              )}

              <Box
                component='img'
                src={Signature}
                alt='signature'
                sx={{
                  maxWidth: 250,
                  opacity: 0.9,
                }}
              />
            </Box>
          )}
        </Box>
      </BorderBoxTextLayout>
    </>
  );
};

export default RecipeAuthor;
