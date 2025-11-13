import {
  Box,
  Typography,
} from '@mui/material';

export default function BackCoverNoteLayout() {
  return (
     <Box key='food-layout-eleven' sx={{ display: 'flex' }}>
          {/* First half */}
          <Box
            sx={{
              width: 794,
              height: 1123,
              p: 5,
              pr: 15,
              bgcolor: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Georgia', serif",
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#2d2d2d',
                mb: 4,
              }}
            >
              NOTES
            </Typography>
    
            <Typography
              sx={{
                fontFamily: "'Georgia', serif",
                fontSize: '0.9rem',
                color: '#666',
                lineHeight: 1.8,
                textAlign: 'justify',
                mb: 4,
              }}
            >
              Use this space to write your own recipe variations, cooking tips, or
              favorite modifications. Every cook has their own secrets and special
              touches that make a recipe their own.
            </Typography>
    
            <Box
              sx={{
                borderTop: '1px solid #ddd',
                pt: 2,
                mt: 4,
                minHeight: '300px',
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Georgia', serif",
                  fontSize: '0.85rem',
                  color: '#999',
                  fontStyle: 'italic',
                }}
              >
                Your notes here...
              </Typography>
            </Box>
          </Box>
    
          {/* second half */}
          <Box
            sx={{
              width: 794,
              height: 1123,
              p: 5,
              pl: 15,
              bgcolor: '#f5f5f5',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Georgia', serif",
                fontSize: '3rem',
                fontWeight: 700,
                color: '#2d2d2d',
                mb: 3,
                textAlign: 'center',
              }}
            >
              Classic Recipes
            </Typography>
    
            <Typography
              sx={{
                fontFamily: "'Georgia', serif",
                fontSize: '1.1rem',
                color: '#666',
                lineHeight: 1.8,
                textAlign: 'center',
                maxWidth: '400px',
                mb: 6,
              }}
            >
              A collection of timeless recipes for every meal. From breakfast to
              lunch, each dish is crafted with care and designed to bring joy to
              your table.
            </Typography>
    
            <Box
              sx={{
                width: '80px',
                height: '2px',
                bgcolor: '#2d2d2d',
                mb: 4,
              }}
            />
    
            <Typography
              sx={{
                fontFamily: "'Georgia', serif",
                fontSize: '0.9rem',
                color: '#999',
                textAlign: 'center',
              }}
            >
              Happy Cooking
            </Typography>
          </Box>
        </Box>
  )
}
