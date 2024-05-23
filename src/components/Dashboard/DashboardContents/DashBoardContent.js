import React from 'react';
import styles from './Dashboard.module.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant='h5' component='div'>
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
        adjective
      </Typography>
      <Typography variant='body2'>
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size='small'>Learn More</Button>
    </CardActions>
  </React.Fragment>
);
const DashBoardContent = () => {
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
                    <Typography
                      sx={{ fontSize: 14 }}
                      color='text.secondary'
                      gutterBottom
                    >
                      Word of the Day
                    </Typography>
                    <Typography variant='h5' component='div'>
                      be{bull}nev{bull}o{bull}lent
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                      adjective
                    </Typography>
                    <Typography variant='body2'>
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>Learn More</Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>


            {/* Featured Chefs and Bloggers */}
            <Grid item xs={12} sm={12} md={6}>
              <Box sx={{}}>
                <Typography variant='h5' gutterBottom>Featured Chefs and Bloggers</Typography>
                <Card variant='outlined'>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color='text.secondary'
                      gutterBottom
                    >
                     Featured Chefs and Bloggers: Introduce users to guest chefs or food bloggers by featuring their profiles and recipes on the dashboard.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>Learn More</Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>


            {/* Upcoming Events */}
            <Grid item xs={12} sm={12} md={6}>
              <Box sx={{}}>
                <Typography variant='h5' gutterBottom>UpComing Events</Typography>
                <Card variant='outlined'>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color='text.secondary'
                      gutterBottom
                    >
                      Display a calendar of upcoming cooking events, food festivals, or culinary workshops in the user's region or online.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>Learn More</Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>


            {/* Most Viewed / Most Rated */}
            <Grid item xs={12} sm={12} md={12}>
              <Box sx={{}}>
                <Typography variant='h5' gutterBottom>Most Viewed / most Rated</Typography>
                <Card variant='outlined'>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color='text.secondary'
                      gutterBottom
                    >
                      toggle between each:
                    </Typography>
                    <Typography variant='body2'>
                      -show most viewed recipe and also most rated top 5 each <br/>
                      -User Reviews and Ratings: Allow users to rate and review recipes they have tried. Display these ratings and reviews to help others in the community make better-informed decisions about which recipes to try.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>Learn More</Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Box sx={{}}>
                {/* Location of local farmers */}
                <Typography variant='h5' gutterBottom>Location of Local Farmers</Typography>
                <Card variant='outlined'>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color='text.secondary'
                      gutterBottom
                    >
                      Local Farmers' Market Locator: Integrate a tool that helps users find nearby farmers' markets to source fresh ingredients locally.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>Learn More</Button>
                  </CardActions>
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
