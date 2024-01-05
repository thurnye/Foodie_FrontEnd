import React, {useEffect, useState} from 'react';
import styles from './Details.module.css'
import {useDropzone} from 'react-dropzone';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import { FaImage } from "react-icons/fa6";
import CropImg from './cropImg.js';
import { IoMdAdd } from "react-icons/io";
import Carousel from './Carousel.js'
import { getRandomInt } from "../../../../util/commons";
import { FaRegTrashCan } from "react-icons/fa6";
import Badge from '@mui/material/Badge';
import { IoMdStar } from "react-icons/io";
import Card from '@mui/material/Card';



const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  position: 'relative',
  display: 'inline-flex',
  borderRadius: 10,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  // width: 160,
  // height: 100,
  width: '90px',
  height: '55px',
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: '90px',
  height: '100%',
  borderRadius: "10px",
};

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      imgId: getRandomInt()
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      imgId: getRandomInt()
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
      imgId: getRandomInt()
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
      imgId: getRandomInt()
  },
];




const  Previews = ({setEventImages, eventImages, setOpen}) => {
  const [files, setFiles] = useState([]);
  const [toCrop, setToCrop] = useState([]);
  const [images, setImages] = useState(eventImages)
  const [image, setImage] = useState()
  const [isHovered, setIsHovered] = useState(false);
  

  const {getRootProps, getInputProps} = useDropzone({
    multiple: false,
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      console.log({acceptedFiles})
      setToCrop(acceptedFiles);

      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  console.log(files);



  const thumbs = images.map((file, index) => {
    return(
      <div style={thumb} key={file.imgId}>
      {/* {index === 0 && <Rating 
      sx={{
        position: 'absolute',
        top:0,
        right: 0
      }}
      size="small"
      name="read-only" 
      value={1} 
      readOnly 
      max={1}
      />
} */}
      <div style={thumbInner}>
        <img
          src={file.imgPath}
          style={img}
          alt={file.imgId}
          onClick={() => setImage(file)}
        />
      </div>
    </div>
  )});

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  const getImage = (img) => {
    console.log(img)
    setImages((prev) => [...prev, img])
  }

  const handleDelete = () => {
    if(image){
      const updatedImages = images.filter(el => el.imgId !== image.imgId);
      setImages(updatedImages);
      setImage("");
    }
  }

  //save images
  const handleSaveImages = () => {
    setEventImages(images);
    setOpen(false) //close the add image/video form
  }
  

  return (
    <section className="container">
      {image ? <Box sx={{ 
        minWidth: 275, 
        height: {sx : 300, md: 470}, 
        borderRadius: 
        '7px', 
        background: '#F8F7FA', 
        position: 'relative',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && 
            <Box sx={{
              position: 'absolute', 
              top: 0, 
              left: 0,  
              zIndex: 100,
              backgroundColor: 'rgb(255 255 255 / 44%)',
              width: '100%',
              height: '100%',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              }}>
                <Button onClick={handleDelete} sx={{
                  minWidth: '35px',
                  borderRadius: '50%',
                  height: '35px',
                  background: '#282828',
                  color: 'white',
                  border: '2px solid white',
                }}>
                  <FaRegTrashCan />
                </Button>
          </Box>
        }
        {/* if the item is first in the images, show the cover image flag */}
        {image?.imgId === images[0]?.imgId && 
          <Box sx={{ maxWidth: '100%', flexGrow: 1, position: 'relative' }}>
            <Box
              sx={{
                position: 'absolute',
                top: 6,
                right: 6,
                height: '100%',
                backgroundColor: 'white', // Change overlay color and transparency
                zIndex: 1,
                color: '#3559E3'
              }}
            >
              <Card sx={{ 
                width: 73, 
                height: '20px',
                borderRadius: '5px', 
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
                }}>
                <Typography variant="body2" sx={{fontSize: '10px', mr: 0.5, mb: {sx: 0, md: 0.5}}}>
                <IoMdStar />
                </Typography>
                <Typography variant="body2" sx={{fontSize: '8px'}}>
                  Cover Image
                </Typography>
              </Card>
            </Box>
          </Box>
        }
        <Carousel maxWidth={'100%'} height={{sx : 300, md: 470}} images={[image]}/>
      </Box> 
      
        : 
          // DropZone
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#F8F7FA', minWidth: 275, height: 300, borderRadius: '7px',  }} >
            <Typography sx={{ fontSize: 24, }} color="text.secondary" >
              <FaImage />
            </Typography>
            <Typography variant="body2" >
              Drag and drop an image or
            </Typography>
            <Button sx={{textTransform: 'none', mt: 1}} variant="outlined">
              Upload image
            </Button>
          </Box>
        </div>
        }
      <aside style={thumbsContainer}>
        {images.length > 0 && <>
          <Button sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',textAlign: 'center', background: '#F8F7FA', width: '90px', height: '55px',  borderRadius: '7px', mr: 2 }} onClick={() => setImage("")} disabled={images.length === 3 ? true : false}>
              <IoMdAdd />
          </Button>
        </>
        }
        {thumbs}
      </aside>
      <CropImg defaultSrc={files[0]?.preview} files={toCrop} getImage={getImage}/>
      {images.length > 0 && <>
        <Box sx={{display: 'flex',justifyContent: 'flex-end',alignItems: 'center'}}>
          <Button variant="contained" onClick={handleSaveImages}>Save</Button>
        </Box>
      </>
      }
    </section>
  );
}

export default Previews;
