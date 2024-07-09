import React, { useState } from 'react';
import styles from './ImageUploadOptions.module.css';
import FileUpload from '../FileUpload/FileUpload';
import { convertToBase64 } from '../../util/commons';
import { Box, Stack } from '@mui/material';
import Unsplash from '../Unsplash/Unsplash';

const ImageUploadOptions = ({images, setImages, isMulti}) => {
  const [openUnsplash, setOpenUnsplash] = React.useState(false);

  return(
  <div className={styles.ImageUploadOptions}>
     <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
            <Stack spacing={2} direction='row'>
              <FileUpload
                multiple={isMulti}
                getFile={async (files) => {
                  console.log('FILES:::', files);
                  if(isMulti){
                    setImages(files.map(async (file) => await convertToBase64(files)))
                  }else{
                    const imgAvatar = await convertToBase64(files);
                    setImages(imgAvatar);

                  }
                }}
              />
              <Unsplash
                multi={isMulti}
                open={openUnsplash}
                setOpen={setOpenUnsplash}
                setSelectedImages={(images) => {
                  !isMulti && setImages(images[0]);
                  isMulti && setImages(images);
                }}
                selectedImages={isMulti ? images : [images]}
                showButton={true}
              />
            </Stack>
          </Box>
  </div>
)};



export default ImageUploadOptions;
