import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';
import { getRandomInt } from '../../../../util/commons';
import { useEffect } from 'react';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: image,
        srcSet: image,
        width: size * cols,
        height: size * rows,
        fit:"crop",
        auto:'format'
    };
  }
// Do not delete, set to give a nice layout
const itemData = [
      {
        rows: 2,
        cols: 2,
      },

      {
      },
      
      {
      },
      
      {
        cols: 2,
      },
      
      {
        cols: 2,
      },
      
      {
        rows: 2,
        cols: 2,
      },
      
      {
        
      },
      
      {
        
      },
      
      {
        rows: 2,
        cols: 2,
      },
      
      {
        
      },
      
      {
        
      },
      
      {
        
        cols: 2,
      },
];
export default function ImageLayout({layout, imageList}) {

    const [quiltedImages, setQuiltedImages] = React.useState([]);

    
    useEffect(() => {
        if(layout === 'Quilted'){
            setQuiltedImages(imageList.map((el, i) => ({
                img: el,
                ...(itemData[i]?.rows ? { rows: itemData[i].rows } : {}),
                ...(itemData[i]?.cols ? { cols: itemData[i].cols } : {})
            })));
        }

    },[layout, imageList]);

  return (<Box>
        {layout === 'Quilted' ? <>
            <ImageList
                sx={{ width: '100%', height: '100%'  }}
                variant="quilted"
                cols={4}
                rowHeight={121}
                >
                {quiltedImages.map((item) => (
                    <ImageListItem key={getRandomInt()} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={'eventImage'}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList>
        </> 
        :
        layout === 'Masonry' ? <>
        <Box sx={{ width: '100%', height: '100%', }}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {imageList.map((item) => (
                <ImageListItem key={getRandomInt()}>
                    <img
                    srcSet={`${item}`}
                    src={`${item}`}
                    alt={'eventImage'}
                    loading="lazy"
                    fit="crop"
                    auto='format'
                    width={248}
                    dpr='2 2x'
                    />
                </ImageListItem>
                ))}
            </ImageList>
            </Box>
        </>
        :
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
        }
  </Box>
  );
}

