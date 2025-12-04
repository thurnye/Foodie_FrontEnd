import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';
import { keyframes } from '@emotion/react';

import Cat1 from '../../public/images/category/cat1.png';
import Cat2 from '../../public/images/category/cat2.png';
import Cat3 from '../../public/images/category/cat3.png';
import Cat4 from '../../public/images/category/cat4.png';
import Cat5 from '../../public/images/category/cat5.png';
import Cat6 from '../../public/images/category/cat6.png';
import BorderBoxTextLayout from './Layouts/BorderBoxTextLayout';

// ---- Animation ----
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

// ---- Types ----
interface CategoryItem {
  name: string;
  img: string;
}

// ---- Component ----
const Category: React.FC = () => {
  const categories: CategoryItem[] = [
    { name: 'Popular', img: Cat1 },
    { name: 'Pizza', img: Cat2 },
    { name: 'Meat', img: Cat3 },
    { name: 'Lunch', img: Cat4 },
    { name: 'Greens', img: Cat5 },
    { name: 'Desserts', img: Cat6 },
  ];

  return (
    <Box sx={{ mb: 4 }}>
      <BorderBoxTextLayout title='CATEGORIES'>
        <Grid
          container
          spacing={2}
          justifyContent='center'
          alignItems='center'
          sx={{ maxWidth: 400}}
        >
          {categories.map((cat) => (
            <Grid item xs={4} sm={4} md={4} key={cat.name}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  '&:hover img': {
                    animation: `${bounce} 1.5s ease-in-out infinite`,
                  },
                }}
              >
                <Link
                  to={{
                    pathname: '/recipes',
                    search: `?q=${cat.name.toLowerCase().replaceAll(' ', '-')}`,
                  }}
                  state={{ category: cat.name }}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <Box
                    component='img'
                    src={cat.img}
                    alt={cat.name}
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      transition: 'transform 0.3s ease',
                      cursor: 'pointer',
                    }}
                  />
                  <Typography
                    variant='body2'
                    sx={{
                      mt: 1,
                      fontWeight: 500,
                      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    }}
                  >
                    {cat.name}
                  </Typography>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </BorderBoxTextLayout>
    </Box>
  );
};

export default Category;
