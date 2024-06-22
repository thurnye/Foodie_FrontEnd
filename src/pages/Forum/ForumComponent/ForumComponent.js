import React, { useEffect, useState } from 'react';
import styles from './ForumComponent.module.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Outlet, useLocation } from 'react-router-dom';
import Search from '../../../components/Search/Search';
import services from '../../../util/services';

const ForumComponent = () => {
  const location = useLocation();
  const [autoCompleteData, setAutoCompleteData] = useState([]);
  const fetchAutoComplete = async () => {
    try {
      const res = await services.getAutoComplete({
        section: ['forum', 'group'],
      });
      setAutoCompleteData(res.data);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    fetchAutoComplete();
  }, []);

  return (
    <div className={styles.ForumComponent}>
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ my: 5 }}>
          <Search data={autoCompleteData} />
        </Box>
      </Container>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
};

export default ForumComponent;
