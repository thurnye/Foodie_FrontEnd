import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { getRandomInt } from '../../../../util/commons';
import truncateText from '../../../UI/truncate';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export default function DashboardRecipeCard({ recipes, origin }) {
  const isRecipesDiscoveries = origin === 'recipesDiscoveries' ? true : false;
  return (
    <Box sx={{ height: 200, overflow: 'auto' }}>
      {recipes.map(({ recipeName, thumbnail, description, link, duration, level }) => (
        <Card
          sx={{
            display: 'flex',
            flexDirection: !isRecipesDiscoveries
              ? 'row'
              : { xs: 'column', sm: 'row' },
            boxShadow: 'none',
            border: 'none',
            mb: 1,
          }}
          key={getRandomInt()}
        >
          <Box>
            <CardMedia
              component='img'
              sx={{
                width: isRecipesDiscoveries ? { xs: '100%', sm: 200 } : 70,
              }}
              image={thumbnail}
              alt={recipeName}
            />
            {isRecipesDiscoveries && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItem: 'center',
                  px: { xs: 0, sm: 1 },
                  py: 1,
                }}
              >
                <Typography
                  variant='caption'
                  sx={{ fontWeight: 'bold', textWrap: 'no-wrap' }}
                >
                  <AccessTimeIcon sx={{ fontSize: 15 }} /> {duration}
                </Typography>
                <Typography
                  variant='caption'
                  sx={{ fontWeight: 'bold', textWrap: 'no-wrap' }}
                >
                  <ThumbUpOffAltIcon sx={{ fontSize: 15 }} /> {level}
                </Typography>
              </Box>
            )}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant={isRecipesDiscoveries ? 'h6' : 'body2'}>
                {recipeName}
              </Typography>
              {isRecipesDiscoveries && <Typography variant='body2'>
               {truncateText(description)}
               <Link to={link} style={{ color: '#1e8aff' }}>
                    {' '}
                    . . .read more
                  </Link>
              </Typography>}
            </CardContent>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
