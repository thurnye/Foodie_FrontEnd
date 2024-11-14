import React, { useMemo } from 'react';
import styles from './UpComingEvents.module.css';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { formatDateWithSuffix, getRandomInt } from '../../../../util/commons';
import { Typography } from '@mui/material';

// Events array
const events = Array(15).fill({
  id: getRandomInt(),
  title: 'Street Food Fest',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  type: 'cooking',
  date: '2024-11-27T08:00:00-04:00',
});

// Color array
const colors = [
  '#FF0000', // Red
  '#FF7F00', // Orange
  '#434306', // Yellow
  '#295829', // Green
  '#412db4', // Blue
  '#4B0082', // Indigo
  '#8B00FF', // Violet
  '#007BFF', // Primary Blue
  '#28A745', // Green
  '#6F42C1', // Purple
  '#FD7E14', // Orange
  '#343A40', // Dark Gray
  '#6e190d', // Light Gray
];

// Function to get a random color
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const UpComingEvents = () => {
  const eventsWithColors = useMemo(() => {
    return events.map((evt) => {
      return { ...evt, randomColor: getRandomColor() };
    });
  }, []);

  return (
    <Box
      sx={{ flexGrow: 1, height: 250, overflow: 'auto' }}
      className={styles.UpComingEvents}
    >
      {events.length === 0 ? (
        <Box
          sx={{
            height: 'inherit',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: 12 }}>
            <i>No Events in Calendar.</i>
          </Typography>
        </Box>
      ) : (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {eventsWithColors.map((evt, index) => {
            const { dayWithSuffix, month, year } = formatDateWithSuffix(
              evt.date
            );

            return (
              <ListItem
                sx={{
                  alignItems: 'flex-start',
                  display: 'flex',
                  pr: 2,
                  height: 48,
                }}
                key={getRandomInt()}
              >
                <ListItemText
                  primary={dayWithSuffix}
                  secondary={`${month}, ${year}`}
                  sx={{
                    borderRight: '1px solid #e2e2e2ee',
                    width: '75px',
                    textAlign: 'center',
                    fontSize: 12,
                    color: evt.randomColor, // Use the memoized random color
                    flexShrink: 0,
                  }}
                  primaryTypographyProps={{
                    fontSize: 12,
                  }}
                  secondaryTypographyProps={{
                    color: evt.randomColor, // Use the memoized random color
                    fontSize: 12,
                  }}
                />
                <ListItemText
                  primary={evt.title}
                  secondary={evt.description}
                  sx={{
                    ml: 2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    whiteSpace: 'normal',
                  }}
                  primaryTypographyProps={{
                    fontSize: 12,
                  }}
                  secondaryTypographyProps={{
                    fontSize: 12,
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      )}
    </Box>
  );
};

export default UpComingEvents;
