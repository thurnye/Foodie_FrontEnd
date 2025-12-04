import React from 'react';
import {
  CardMedia,
  CardContent,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Video } from 'react-feather';
import { truncateText } from '../../../app/utils/app.text';
import { IRecipe } from '../../Recipe/types/recipe.types';

interface RecentRecipeCardProps {
  recipe: IRecipe;
}

const RecentRecipeCard: React.FC<RecentRecipeCardProps> = ({ recipe }) => {
  const theme = useTheme();
    // Extract values safely
        const title = recipe.basicInfo?.recipeName ?? 'Untitled Recipe';
        const duration = recipe.basicInfo?.duration?.label ?? '';
        const level = recipe.basicInfo?.level?.label ?? '';
        const thumbnail = recipe.details?.thumbnail ?? '';
        const aboutText =
          recipe.details?.about?.find((a) => a.type === 'text')?.value ?? '';
        const isVideo =
          recipe.details?.about?.some((a) => a.type === 'video') ?? false;


  return (
        // Extract values safely
        // const title = recipe.basicInfo?.recipeName ?? 'Untitled Recipe';
        // const duration = recipe.basicInfo?.duration?.label ?? '';
        // const level = recipe.basicInfo?.level?.label ?? '';
        // const thumbnail = recipe.details?.thumbnail ?? '';
        // const aboutText =
        //   recipe.details?.about?.find((a) => a.type === 'text')?.value ?? '';
        // const isVideo =
        //   recipe.details?.about?.some((a) => a.type === 'video') ?? false;


          <Box
            
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              mb: 3,
              borderRadius: 2,
              overflow: 'hidden',
              // boxShadow: theme.shadows[1],
              // '&:hover': {
              //   boxShadow: theme.shadows[4],
              //   transform: 'translateY(-2px)',
              //   transition: 'all 0.2s ease',
              // },
            }}
          >
            {/* --- Image --- */}
            <CardMedia
              component="img"
              image={thumbnail}
              alt={title}
              sx={{
                width: { xs: '100%', sm: '40%' },
                height: { xs: 200, sm: 'auto' },
                objectFit: 'cover',
              }}
            />

            {/* --- Content --- */}
            <CardContent
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                p: { xs: 2, sm: 3 },
              }}
            >
              {/* --- Meta Info (Duration / Level / Video) --- */}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  mb: 1.5,
                  alignItems: 'center',
                }}
              >
                {isVideo ? (
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: theme.palette.text.secondary,
                    }}
                  >
                    <Video
                      strokeWidth={2}
                      size={15}
                      style={{ marginRight: 5 }}
                    />
                    <b>0:30</b>
                  </Typography>
                ) : (
                  <>
                    {duration && (
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          color: theme.palette.text.secondary,
                        }}
                      >
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          style={{ marginRight: 5 }}
                        />
                        <b>{duration}</b>
                      </Typography>
                    )}
                    {level && (
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          color: theme.palette.text.secondary,
                        }}
                      >
                        <FontAwesomeIcon
                          icon={['far', 'thumbs-up']}
                          style={{ marginRight: 5 }}
                        />
                        <b>{level}</b>
                      </Typography>
                    )}
                  </>
                )}
              </Box>

              {/* --- Title --- */}
              <Typography
                variant="h6"
                component={Link}
                to={`/recipe/${recipe._id}`}
                sx={{
                  fontFamily: '"Merriweather", serif',
                  color: theme.palette.text.primary,
                  textDecoration: 'none',
                  '&:hover': { color: theme.palette.primary.main },
                  mb: 1,
                  lineHeight: 1.4,
                }}
              >
                {title}
              </Typography>

              {/* --- Description --- */}
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  fontFamily: '"Catamaran", sans-serif',
                  lineHeight: 1.6,
                }}
              >
                {truncateText(aboutText, 180)}{' '}
                <Link
                  to={`/recipe/${recipe._id}`}
                  style={{
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                  }}
                >
                  ...read more
                </Link>
              </Typography>
            </CardContent>
          </Box>
  );
};

export default RecentRecipeCard;
