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

interface FileUploadProps {
  getFile: (file: File | null) => void;
  multiple?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ getFile, multiple = false }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    getFile(file);
  };

  return (
    <Button
      component="label"
      role={undefined}
      variant="text"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      sx={{ textTransform: 'none' }}
    >
      Upload file
      <VisuallyHiddenInput
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        multiple={multiple}
      />
    </Button>
  );
};

export default FileUpload;
