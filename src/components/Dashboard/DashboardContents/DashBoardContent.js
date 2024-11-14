import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import UpComingEvents from './UpComingEvents/UpComingEvents';
import FeaturedChefsAndBloggers from './FeaturedChefsAndBloggers/FeaturedChefsAndBloggers';
import LocalFarmers from './LocalFarmers/LocalFarmers';
import RecipeDiscoveries from './RecipeDiscoveries/RecipeDiscoveries';
import MostViewedAndRated from './MostViewedAndRated/MostViewedAndRated';




const DashBoardContent = ({isLoaded}) => {


  return (
    <div>
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <Box sx={{}}>
                {/* Recent Activities */}
                <Typography variant='h5' gutterBottom>
                  Recent Activities
                </Typography>
                <Card variant='outlined'>
                  <CardContent>
                  <Typography  gutterBottom>
                  coming soon!!!
                </Typography>
                  </CardContent>
                  
                </Card>
              </Box>
            </Grid>

            {/* Featured Chefs and Bloggers */}
            <Grid item xs={12} sm={12} md={6}>
              <Box sx={{}}>
                <Typography variant='h5' gutterBottom>
                  Featured Chefs and Bloggers
                </Typography>
                <Card variant='outlined'>
                  <CardContent>
                    <FeaturedChefsAndBloggers />
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            {/* Upcoming Events */}
            <Grid item xs={12} sm={12} md={6}>
              <Box sx={{}}>
                <Typography variant='h5' gutterBottom>
                  UpComing Events
                </Typography>
                <Box></Box>
                <Card variant='outlined'>
                  <CardContent>
                    <UpComingEvents />
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            {/* Most Viewed / Most Rated */}
            <Grid item xs={12} sm={12} md={6}>
              <Box sx={{}}>
                <Typography variant='h5' gutterBottom>
                  Most Viewed / most Rated
                </Typography>
                <Card variant='outlined'>
                  <CardContent>
                   <MostViewedAndRated/>
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            {/* Recipies Dicoveries */}
            <Grid item xs={12} sm={12} md={6}>
              <Box sx={{}}>
                <Typography variant='h5' gutterBottom>
                  Recipes Discoveries 
                </Typography>
                <Card variant='outlined'>
                  <CardContent>
                    <RecipeDiscoveries/>
                  </CardContent>
                </Card>
              </Box>
            </Grid>


            <Grid item xs={12} sm={12} md={12}>
              <Box sx={{}}>
                {/* Location of local farmers */}
                <Typography variant='h5' gutterBottom>
                  Local Farmers Nearby
                </Typography>
                <Card variant='outlined'>
                  <CardContent>
                    <LocalFarmers isLoaded={isLoaded}/>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default DashBoardContent;
