import React, { useState, useRef, useEffect } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { getRandomInt } from "../../../../../util/commons";
import Typography from '@mui/material/Typography';

  
export const CropImg = ({ getImage,files}) => {
  const [image, setImage] = useState("");
  const cropperRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [dimensions, setDimensions] = useState({ width: null, height: null });


  useEffect(()=> {
    if(files.length > 0){
        const reader = new FileReader();
        reader.onload = () => {
        setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
        setOpen(true)
    }
  },[files])


  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
        getImage({
        imgPath: cropperRef.current?.cropper.getCroppedCanvas().toDataURL(),
        imgId: getRandomInt(),
        dimensions
    });
    setOpen(false)
    }
  };
  const getCroppedDimensions = () => {
    const cropper = cropperRef.current.cropper;
    if (cropper) {
      const croppedCanvas = cropper.getCroppedCanvas();
      setDimensions({ width: croppedCanvas.width, height: croppedCanvas.height });
    }
  };



  return (
    <div>
        <Dialog
        open={open}
        onClose={() => setOpen(!open)}
        aria-imgIdledby="alert-dialog-title"
        aria-desedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Crop Image
        </DialogTitle>
        <DialogContent>
            <Typography variant="caption" display="block" sx={{mb: 3}}>
                <li>image width: {dimensions.width}</li>
                <li>image height: {dimensions.height}</li>
            </Typography>
            <div style={{ width: "100%" }}>
                <Cropper
                style={{ height: 400, width: "100%" }}
                initialAspectRatio={1.7}
                preview=".img-preview"
                src={image}
                ref={cropperRef}
                viewMode={1}
                guides={true}
                minCropBoxHeight={20}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                checkOrientation={false} 
                zoom={-5}
                crop={getCroppedDimensions}
                />
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(!open)}>Cancel</Button>
          <Button onClick={getCropData} autoFocus>Save</Button>
        </DialogActions>
      </Dialog>
        
    </div>
  );
};

export default CropImg;
