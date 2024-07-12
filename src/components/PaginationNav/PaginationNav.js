import React from 'react';
import styles from './PaginationNav.module.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


const PaginationNav = ({page, setPage, count}) => {
  const handleChange = (event, value) => {
    setPage(value);
  };
  return(
  <Box className={styles.PaginationNav} sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mt: 2
    }}>
    <Stack spacing={2}>
      <Pagination count={count} defaultPage={Math.ceil(count/2)} siblingCount={0} onChange={handleChange} sx={{display: {xs: 'block', sm: 'none'}}} showFirstButton showLastButton/>
      <Pagination count={count} page={page} onChange={handleChange}  sx={{display: {xs: 'none', sm: 'block'}}} showFirstButton showLastButton/>
    </Stack>
  </Box>
)};


export default PaginationNav;
