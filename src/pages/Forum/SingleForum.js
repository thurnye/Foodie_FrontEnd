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
import { Link, useLocation } from 'react-router-dom';

const chatRooms = [
  {
    _id: getRandomInt(),
    title: 'How to Boil Water Effectively',
    topics: '466',
    users: '123',
    startedBy: '',
    forumId: '',
  },
  {
    _id: getRandomInt(),
    title: 'The Best Cooking Method',
    topics: '34,987',
    users: '586',
    startedBy: '',
    forumId: '',
  },
  {
    _id: getRandomInt(),
    title: 'Things to Know when cooking',
    topics: '811',
    users: '673',
    startedBy: '',
    forumId: '',
  },
  {
    _id: getRandomInt(),
    title: 'Cooking Tips No One Told Me',
    topics: '80',
    users: '304',
    startedBy: '',
    forumId: '',
  },
];


export default function Forum() {
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
          {chatRooms.map((el) => (
            <Grid item xs={2} sm={4} md={4} key={el._id}>
                 {/* <Link
                        to={{
                          pathname: `/forum/${el._id}`,
                        }}
                        state={{ forumId: el._id }}
                      > */}
              <Card sx={{  }}>
                <CardContent>
                    <Box sx={{height: 70}}>
                    <Typography variant='body1' sx={{textAlign: 'center'}}>
                        {el.title}
                    </Typography>
                    </Box>
                  <Box sx={{mb:3, display: 'flex', justifyContent:'space-between' }}>
                    <Typography variant='body2' color='text.secondary' gutterBottom>
                         {el.topics} topics
                    </Typography>
                    <Typography variant='body2' color='text.secondary' gutterBottom>
                        {el.users} users
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
                      {/* </Link> */}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
