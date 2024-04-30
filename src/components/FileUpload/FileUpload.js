import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function FileUpload({getFile, multiple}) {
  return (
    <Button
      component="label"
      role={undefined}
      variant="text"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      sx={{textTransform: 'none'}}
    >
      Upload file
      <VisuallyHiddenInput type="file" onChange={(event) => getFile(event.target.files[0])} accept="image/*"/>
    </Button>
  );
}
