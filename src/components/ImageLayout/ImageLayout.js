import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import { getRandomInt } from '../../util/commons';

export default function ImageLayout({isMultiple, imageList}) {

  return (<Box>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {imageList.map((img) => 
          <Grid item xs={2} sm={4} md={4} key={getRandomInt()}>
            <CardMedia
            component="img"
            height="100%"
            image={img}
            alt={'image thumbnail'}
            auto='format'
            fit='crop'
            sx={{
              width: '100%', objectFit: 'contain'
            }}
          />
          </Grid>
        )}
      </Grid>
    </Box>
  </Box>
  );
}

