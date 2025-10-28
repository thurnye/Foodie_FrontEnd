import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  Grid,
  CardMedia,
  Typography,
  IconButton,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { FaUnsplash } from 'react-icons/fa';
import axios from 'axios';
import { getRandomInt } from '../../util/commons';
import PaginationNav from '../components/PaginationNav';
import CustomizedButton from '../components/CustomizedButton';

const root = `https://api.unsplash.com/`;
const key = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const limit = 30;

// ✅ Types
interface UnsplashImage {
  id: string;
  image: string;
  description: string;
}

interface UnsplashProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedImages: string[];
  setSelectedImages: React.Dispatch<React.SetStateAction<string[]>>;
  showButton?: boolean;
  multi?: boolean;
}

const Unsplash: React.FC<UnsplashProps> = ({
  open,
  setOpen,
  selectedImages,
  setSelectedImages,
  showButton = true,
  multi = false,
}) => {
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [searchedQuery, setSearchedQuery] = useState<string>('');
  const [searchedResult, setSearchedResult] = useState<UnsplashImage[]>([]);
  const [tempSelectedImages, setTempSelectedImages] = useState<string[]>([]);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (page && open) handleSearch();
  }, [page]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${root}/search/photos`, {
        params: {
          query: searchedQuery || 'food',
          client_id: key,
          page,
          per_page: limit,
        },
      });
      const data: UnsplashImage[] = response.data.results.map((el: any) => ({
        id: el.id,
        image: el.urls.small,
        description: el.alt_description || '',
      }));
      setCount(response.data.total_pages);
      setSearchedResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelect = (image: string) => {
    if (!multi) {
      setTempSelectedImages([image]);
    } else {
      const isSelected = tempSelectedImages.includes(image);
      setTempSelectedImages(
        isSelected
          ? tempSelectedImages.filter((i) => i !== image)
          : [...tempSelectedImages, image]
      );
    }
  };

  return (
    <Box>
      {showButton && (
        <CustomizedButton
          variant="text"
          label="Unsplash"
          startIcon={<FaUnsplash />}
          disableElevation
          onClick={() => setOpen(true)}
          sx={{ textTransform: 'none', color: '#121212' }}
        />
      )}

      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle sx={{ textAlign: 'center' }}>Search Unsplash Images</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              my: 3,
              display: 'flex',
              width: { xs: '100%', sm: '90%', md: '70%' },
              margin: 'auto',
            }}
          >
            <TextField
              size="small"
              fullWidth
              value={searchedQuery}
              onChange={(e) => setSearchedQuery(e.target.value)}
              placeholder="Search for images..."
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderRadius: 0, border: 'none', boxShadow: 2 },
                },
              }}
            />
            <CustomizedButton
              variant="contained"
              label="Search"
              backgroundColor="#000"
              disableElevation
              onClick={handleSearch}
              sx={{ fontSize: { xs: 15, md: 18 }, borderRadius: 0, height: 40 }}
            />
          </Box>

          <Typography variant="caption" sx={{ display: 'block', mb: 2 }}>
            Click to select image
          </Typography>

          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {searchedResult.map((item) => (
              <Grid item xs={2} sm={4} md={4} key={item.id}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.description}
                    onClick={() => handleSelect(item.image)}
                    sx={{ cursor: 'pointer' }}
                  />
                  <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
                    <IconButton onClick={() => handleSelect(item.image)}>
                      {tempSelectedImages.includes(item.image) ? (
                        <CheckCircleOutlineIcon sx={{ color: '#038703' }} />
                      ) : (
                        <RadioButtonUncheckedIcon />
                      )}
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          {count > limit && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 3,
              }}
            >
              <PaginationNav page={page} setPage={setPage} count={count} />
            </Box>
          )}
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'space-between' }}>
          <Typography variant="body2" sx={{ textAlign: 'start' }}>
            {tempSelectedImages.length > 0 && `Selections: ${tempSelectedImages.length}`}
          </Typography>
          <Box>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() => {
                setSelectedImages(tempSelectedImages);
                handleClose();
              }}
            >
              Save
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Unsplash;
