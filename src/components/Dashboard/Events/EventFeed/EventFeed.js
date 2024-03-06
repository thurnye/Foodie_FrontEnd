import React from 'react';
import styles from './EventFeed.module.css';
import Box from '@mui/material/Box';
import {Paper, Grid} from '@mui/material'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import EventList from '../EventList/EventList'


const EventFeed = () => (
  <div className={styles.EventFeed}>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
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
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  Events List
                  <EventList/>
                </Paper>
              </Grid>
            </Grid>
          </Container>
  </div>
);

EventFeed.propTypes = {};

EventFeed.defaultProps = {};

export default EventFeed;
