import React from 'react';
import styles from './CookBookContainer.module.css';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CookBookContainer = () => (
  <div className={styles.CookBookContainer}>
    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Typography gutterBottom sx={{ mx: 3 }}>
                  <Link to='/account/recipe/cook-book/generate'>Generate Cook Book</Link>
                </Typography>
                {/* <Typography gutterBottom sx={{ mx: 3 }}>
                  <Link to='/account/recipe/create-recipe'>Create Recipe</Link>
                </Typography> */}
              </Box>
            </Grid>
          </Grid>
    </Container>
  </div>
);


export default CookBookContainer;
