import React, { useEffect, useState } from 'react';
import styles from './AllForums.module.css';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Search from '../../../components/Search/Search';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import CreateForum from '../CreateForum/CreateForum'; //do not delete
import services from '../../../util/services';
import PaginationNav from '../../../components/PaginationNav/PaginationNav';
import RequestFeedback from '../../../components/RequestFeedback/RequestFeedback';

const AllForums = () => {
  // const [newForum, setNewForum] = useState(); //do not delete
  const [forums, setForums] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [count, setCount] = useState(0);

   // FeedBack States
   const [open, setOpen] = useState(false);
   const [reqLoading, setReqLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   const [saved, setSaved] = useState(false);
   const [showCancel, setShowCancel] = useState(false);
   const [message, setMessage] = useState('');


  const fetchForums = async (query) => {
    try {
      setIsError(false);
      setSaved(false);
      setMessage('');
      setShowCancel(false);

      const result = await services.getForums(query);
      setForums(result.data.groupRooms);
      setCount(result.data.count);
      console.log(result.data)
    } catch (error) {
      console.log('ERROR:::', error);
      const errMsg = error.response.data;
      console.log(error.response.data);
      setMessage(errMsg);
      setShowCancel(false);
      setSaved(false);
      setIsError(true);
      setOpen(!open);
    }
  };



  useEffect(() => {
    fetchForums({ currentPage, perPage });
  }, [currentPage, perPage]);

  //do not delete
  // useEffect(() => {
  //   if (newForum) {
  //     console.log('NewGroup:::', newForum);
  //     setForums((prevGroupRooms) => [newForum, ...prevGroupRooms]);
  //   }
  // }, [newForum]);

  return (
    <div className={styles.AllForums}>
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* do not delete */}
          {/* <CreateForum setNewForum={setNewForum} /> */}
        </Box>

        <Box sx={{ flexGrow: 1, my: 5 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {forums.map((el) => (
              <Grid item xs={2} sm={4} md={4} key={el._id}>
                <Link
                  to={`/forums/forum/${el._id}`}
                  state={{ forumId: el._id }}
                >
                  <Card sx={{ cursor: 'pointer' }}>
                    <CardContent
                      sx={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          variant='body1'
                          sx={{
                            textAlign: 'center',
                            height: { xs: '10vh', md: '7vh' },
                          }}
                        >
                          {el.forumName}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          mt: 5,
                          display: 'flex',
                          justifyContent: {
                            xs: 'space-between',
                            lg: 'space-evenly',
                          },
                        }}
                      >
                        <Typography
                          variant='body2'
                          color='text.secondary'
                          gutterBottom
                        >
                          {el.forumTotalGroups > 1
                            ? `${el.forumTotalGroups} groups`
                            : `${el.forumTotalGroups} group`}
                        </Typography>
                        <Typography
                          variant='body2'
                          color='text.secondary'
                          gutterBottom
                        >
                          {el.forumTotalMembers > 1
                            ? `${el.forumTotalMembers} members`
                            : `${el.forumTotalMembers} member`}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>

        {count > 0 && (
          <Box
            sx={{
              my: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PaginationNav
              page={currentPage}
              setPage={setCurrentPage}
              count={count}
            />
          </Box>
        )}
      </Container>
      <RequestFeedback
        successMessage={message}
        errorMessage={message}
        open={open}
        setOpen={setOpen}
        loading={reqLoading}
        isError={isError}
        saved={saved}
        showCancel={showCancel}
        handleError={() => setOpen(!open)}
        errorBtnLabel={'close'}
        handleSuccess={() => {
          setOpen(!open);
        }}
        successBtnLabel={'close'}
      />
    </div>
  );
};

export default AllForums;
