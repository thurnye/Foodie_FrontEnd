import * as React from 'react';
import { Box, Grid, CardMedia } from '@mui/material';

// Define props interface
interface ImageLayoutProps {
  isMultiple?: boolean;
  imageList: string[];
}

const ImageLayout: React.FC<ImageLayoutProps> = ({ isMultiple = false, imageList }) => {
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {imageList.map((img, i) => (
            <Grid item xs={2} sm={4} md={4} key={`image_layout_${i}`}>
              <CardMedia
                component="img"
                height="100%"
                image={img}
                alt="image thumbnail"
                sx={{
                  width: '100%',
                  objectFit: isMultiple ? 'cover' : 'contain',
                  borderRadius: 2,
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ImageLayout;
