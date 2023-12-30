import React from 'react';
import styles from './Dashboard.module.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EventList from '../EventList/EventList';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        {/* <Link color="inherit" to="https://mui.com/">
          Your Website
        </Link>{' '} */}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
const DashBoardContent = () => {
    return (
        <div>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Link to="/eventbrit/create-event">Create Event</Link>
                </Box>
              </Grid>
              
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  Events List
                  <EventList/>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </div>
    );
}

export default DashBoardContent;
