import React, {useEffect, useState} from 'react';
import styles from './Unsplash.module.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CustomizedButton from '../CustomizedButton/CustomizedButton';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import { getRandomInt } from '../../util/commons';
import PaginationNav from '../PaginationNav/PaginationNav';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import IconButton from '@mui/material/IconButton';

const root = `https://api.unsplash.com/`
const key = process.env.REACT_APP_UNSPLASH_ACCESS_KEY
const limit = 30

const Unsplash = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [searchedQuery, setSearchedQuery] = useState('');
  const [searchedResult, setSearchedResult] = useState([]);
  const [selectedImages, setSelectedImages] = useState([])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => { handleSearch()},[page])



  const handleSearch = async() => {
    try{
      const response = await axios.get(`${root}/search/photos`, {
        params: {
          query: searchedQuery,
          client_id: key,
          page,
          per_page: limit,
        },
      });
      const data = response.data.results.map((el) => ({id: el.id, image: el.urls.small, description: el.alt_description}))
      setCount(response.data.total_pages)
      setSearchedResult(data);
    }catch(error){
      console.log(error)
    }
  }


  const handleSelect = (image) => {
    const isSelected = selectedImages.includes(image);
  
    if (isSelected) {
      const updatedImages = selectedImages.filter((selectedImage) => selectedImage !== image);
      setSelectedImages(updatedImages);
    } else {
      setSelectedImages([...selectedImages, image]);
    }
  };

  // console.log(selectedImages)

  return(
  <div className={styles.Unsplash}>
    <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"lg"}
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title" sx={{textAlign: 'center'}}>
         Search Unsplash Images
        </DialogTitle>
        <DialogContent>
          <Box sx={{
            my: 3, 
            display: 'flex',
            width: {xs: '100%', sm:'90%', md: '70%'},
            margin: 'auto',
          }}>
            <TextField
              id="outlined-searchUnsplash"
              size="small"
              fullWidth
              value={searchedQuery}
              onChange={(event) => {
                setSearchedQuery(event.target.value);
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderRadius: 0,
                    border: 'none',
                    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
                  }},
                  '&.Mui-focused': {
                    borderColor: '#6F7E8C'
                  },
              }}
            />
            <CustomizedButton 
              variant="contained" 
              label={'Search'} 
              backgroundColor={'#000000'} 
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              disableElevation
              onClick={handleSearch}
              sx={{fontSize: {xs: 15, md: 18}, borderRadius: 0, height: 40}}
            />
          </Box>

          <Box sx={{ flexGrow: 1, my: 5 }}>
            <Typography variant="caption" display="block" gutterBottom sx={{display: count > limit ? 'block' : 'none', mb: 3}}>
              click to select image
            </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {searchedResult.map((item, index) => (
              <Grid item xs={2} sm={4} md={4} key={getRandomInt()}>
                <Box sx={{position: 'relative'}}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.description}
                    onClick={() => handleSelect(item.image)}
                  />
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0
                    }}>
                      <IconButton aria-label="icon" onClick={() => handleSelect(item.image)}>
                      {selectedImages.includes(item.image) ? 
                        <CheckCircleOutlineIcon sx={{color: '#038703'}}/> :
                        <RadioButtonUncheckedIcon /> 
                      }
                      </IconButton>
                    </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{
          display: count > limit ? 'flex' : 'none', 
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <PaginationNav page={page} setPage={setPage} count={count}/>
        </Box>
        </DialogContent>
        <DialogActions sx={{
          justifyContent: 'space-between'}}>
          
          <Typography variant="body2" sx={{
            textAlign: 'start'
            }}>
            <i>{selectedImages.length > 0 && `Selections: ${selectedImages.length}`}</i>
          </Typography>
          <Box>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} autoFocus>Save</Button>
          </Box>
        </DialogActions>
      </Dialog>
  </div>
)};

export default Unsplash;
