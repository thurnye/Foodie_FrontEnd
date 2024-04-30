import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';
import { getRandomInt } from '../../../../../util/commons';



export default function ImageLayout({isMultiple, imageList}) {

  return (<Box>
    {isMultiple ? 
        <ImageList sx={{ width: '100%', height: '100%' }} cols={3} rowHeight={164}>
            {imageList.map((item) => (
                <ImageListItem key={getRandomInt()}>
                <img
                    srcSet={`${item}`}
                    src={`${item}`}
                    alt={'eventImage'}
                    loading="lazy"
                    fit="crop"
                    auto='format'
                    style={{ width: '10rem', objectFit: 'contain'}}
                />
                </ImageListItem>
            ))}
            </ImageList> 
            : 
            <img src={imageList} className="card-img" alt="event_banner" />
    }
  </Box>
  );
}

