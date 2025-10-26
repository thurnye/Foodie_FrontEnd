import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

import Bg3 from '../../../public/images/jumbotron/bg3.jpeg';
import Book1 from '../../../public/images/books/book1.png';
import Book2 from '../../../public/images/books/book2.png';
import Book3 from '../../../public/images/books/book3.png';

const Section = styled(Box)(({ theme }) => ({
  marginTop: '5vh',
  marginBottom: '10vh',
  backgroundImage: `url(${Bg3})`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  textAlign: 'center',
  color: '#000',
  padding: theme.spacing(2, 2),
  [theme.breakpoints.down('sm')]: {
    backgroundAttachment: 'scroll',
    padding: theme.spacing(6, 2),
  },
}));

const BookImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: 6,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));
const books = [
  { name: 'book1', image: Book1, link: '/' },
  { name: 'book2', image: Book2, link: '/' },
  { name: 'book3', image: Book3, link: '/' },
];

const BooksAd: React.FC = () => {
  return (
    <Section>
      <Box
        maxWidth='md'
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          textAlign: 'left',
          p: 4,
        }}
      >
        <Typography
          variant='h3'
          sx={{
            fontWeight: 700,
            fontFamily: '"Merriweather", serif',
            mb: 2,
            fontSize: { xs: '1.8rem', md: '3rem' }
          }}
        >
          Check out my <span style={{ color: '#2d2d28' }}>newest</span> vegan
          recipe books
        </Typography>

        <Typography
          variant='body1'
          sx={{
            mb: 6,
            maxWidth: 600,
            lineHeight: 1.7,
            color: 'text.secondary',
            fontFamily: '"Catamaran", sans-serif',
          }}
        >
          Dive into a collection of wholesome, plant-based recipes crafted to
          nourish your body and delight your taste buds. From quick weeknight
          dinners to vibrant breakfast bowls and desserts, each recipe is
          designed to help you eat cleaner, feel better, and live fully — one
          meal at a time.
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent='center'
          alignItems='center'
          sx={{ maxWidth: 700, mx: 'auto' }}
        >
          {books.map((book, i) => (
            <Grid item xs={12} sm={4} key={`book_${i}_${book.name}`}>
              <Link
                to={book.link}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <BookImage src={book.image} alt={book.name} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Section>
  );
};

export default BooksAd;
