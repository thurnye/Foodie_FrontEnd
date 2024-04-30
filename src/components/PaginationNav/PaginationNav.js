import React from 'react';
import styles from './PaginationNav.module.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const PaginationNav = ({page, setPage, count}) => {
  const handleChange = (event, value) => {
    setPage(value);
  };
  return(
  <div className={styles.PaginationNav}>
    <Stack spacing={2}>
      <Pagination count={count} defaultPage={Math.ceil(count/2)} siblingCount={0} onChange={handleChange} sx={{display: {xs: 'block', sm: 'none'}}}/>
      <Pagination count={count} page={page} onChange={handleChange}  sx={{display: {xs: 'none', sm: 'block'}}}/>
    </Stack>
  </div>
)};


export default PaginationNav;
