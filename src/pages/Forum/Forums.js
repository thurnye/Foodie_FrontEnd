import React from 'react';
// import Chat from './Chat'
import Box from '@mui/material/Box';
import Search from '../../components/Search/Search';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getRandomInt } from '../../util/commons';
import { Link } from 'react-router-dom';



const forumsOptions = [
  {
      "_id": 434725658166,
      "title": "Alcoholic Beverages",
      "topics": "466",
      "users": "123"
  },
  {
      "_id": 287991712566,
      "title": "General Cooking Information",
      "topics": "34,987",
      "users": "586"
  },
  {
      "_id": 411196924614,
      "title": "Recipes & Ingredients",
      "topics": "811",
      "users": "673"
  },
  {
      "_id": 433134413375,
      "title": "Vegetarian and Vegan Food",
      "topics": "80",
      "users": "304"
  }
];

console.log(forumsOptions)

export default function Forums() {
  return (
    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ my: 5 }}>
        <Search data={[]} />
      </Box>

      <Box sx={{ flexGrow: 1, my: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {forumsOptions.map((el) => (
            <Grid item xs={2} sm={4} md={4} key={el._id}>
              <Link
                to={{
                  pathname: `/forum`,
                }}
                state={{ forumId: el._id }}
              >
                <Card sx={{ cursor:'pointer', border: '2px dotted red'}}>
                  <CardContent sx={{display: 'flex', flexDirection: 'column', height: {xs: '25vh', md:'20vh', lg: '10vh'}}}>
                    <Box sx={{ flexGrow: 1}}>
                      <Typography variant='body1' sx={{ textAlign: 'center' }}>
                        {el.title}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography
                        variant='body2'
                        color='text.secondary'
                        gutterBottom
                      >
                        {el.topics} topics
                      </Typography>
                      <Typography
                        variant='body2'
                        color='text.secondary'
                        gutterBottom
                      >
                        {el.users} users
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
