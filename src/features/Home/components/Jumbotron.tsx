import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import bgImage from '../../../public/images/jumbotron/bg2.jpeg'; // replace with your actual image

// ---------- Styled Components ----------
const JumbotronWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundImage: `url(${bgImage})`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '60vh',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '50vh',
    backgroundAttachment: 'scroll',
  },
}));

const JumbotronContent = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.92)',
  color: '#000',
  padding: theme.spacing(2),
  maxWidth: 540,
  borderRadius: 6,
//   boxShadow: theme.shadows[3],
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90%',
    margin: '0 auto',
  },
}));


const Jumbotron: React.FC = () => {
  return (
    <JumbotronWrapper>
      <Container>
        <JumbotronContent>
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            }}
          >
            Discover Delicious Recipes
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              lineHeight: 1.6,
              color: 'text.secondary',
            }}
          >
            Explore a world of flavors! From vegan delights to indulgent desserts, 
            find the perfect recipe for every mood and moment.
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/recipes"
              sx={{
                backgroundColor: '#000',
                textTransform: 'none',
                px: 3,
                '&:hover': { backgroundColor: '#333' },
              }}
            >
              Browse Recipes
            </Button>

            <Button
              variant="text"
              component={Link}
              to="/about"
              sx={{
                color: '#000',
                textTransform: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Learn More
            </Button>
          </Box>
        </JumbotronContent>
      </Container>
    </JumbotronWrapper>
  );
};

export default Jumbotron;
