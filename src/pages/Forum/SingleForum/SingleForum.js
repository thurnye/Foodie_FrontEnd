import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from './SingleForum.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Search from '../../../components/Search/Search';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import io from 'socket.io-client';
// import { baseUrl } from '../../../util/http-commons';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import services from '../../../util/services';
import { getDateShortWithoutWeek } from '../../../util/commons';
import PaginationNav from '../../../components/PaginationNav/PaginationNav';
import BackNavigation from '../../../components/BackNavigation/BackNavigation';
import CreateGroup from '../CreateGroup/CreateGroup';
import { useSelector } from 'react-redux';
import RequestFeedback from '../../../components/RequestFeedback/RequestFeedback';
import GroupRequest from '../../../components/GroupRequest/GroupRequest';

// const socket = io(baseUrl);

const groupActions = {
  pending: 'pending',
  groupExit: 'exit',
};

const SingleForum = () => {
  const user = useSelector((state) => state.userLog.user?.user);
  const location = useLocation();
  const navigate = useNavigate();
  const forumId = location.state?.forumId;
  const [groupRooms, setGroupRooms] = useState([]);
  const [newGroup, setNewGroup] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // FeedBack States
  const [open, setOpen] = useState(false);
  const [reqLoading, setReqLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [message, setMessage] = useState('');
  const [savingMessage, setSavingMessage] = useState('');

  const fetchForumGroups = async (query) => {
    try {
      setIsError(false);
      setSaved(false);
      setMessage('');
      setShowCancel(false);
      const result = await services.getGroups(query);
      setGroupRooms(result.data.groupRooms);
      setCount(result.data.count);
      console.log(result.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
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
    user &&
      forumId &&
      fetchForumGroups({ currentPage, perPage, forumId, userId: user._id });
  }, [currentPage, forumId, perPage, user]);

  useEffect(() => {
    if (newGroup) {
      console.log('NewGroup:::', newGroup);
      setGroupRooms((prevGroupRooms) => [newGroup, ...prevGroupRooms]);
    }
  }, [newGroup]);

  useEffect(() => {}, [newGroup]);


  const handleGroupActions = (action, groupId) => {
    setGroupRooms((prevGroupRooms) =>
      prevGroupRooms.map((group) =>
        group._id === groupId
          ? {
              ...group,
              isPendingMember: action === groupActions.pending ? true : group.isPendingMember,
              isMember: action === groupActions.groupExit ? false : group.isMember,
            }
          : group
      )
    );
  };


  return (
    <div className={styles.SingleForum}>
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <BackNavigation
            variant='text'
            label={'Back To All Forums'}
            onClick={() => navigate(`/forums`)}
          />

          <CreateGroup setNewGroup={setNewGroup} />
        </Box>
        {!loading && groupRooms.length > 0 && (
          <>
            <Box sx={{ flexGrow: 1, my: 5 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {groupRooms.map((el) => (
                  <Grid item xs={4} sm={4} md={4} key={el._id}>
                    <Card
                      sx={{
                        maxWidth: { xs: 250, sm: 350, md: 'unset' },
                        m: 'auto',
                      }}
                    >
                      <Link
                        to={{
                          pathname: `/forums/forum/group`
                          // pathname: el.isMember ? `/forums/forum/group` : '',
                        }}
                        state={{ groupId: el._id, forumId }}
                      >
                        <CardContent
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            cursor: 'pointer',
                          }}
                        >
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography
                              variant='body1'
                              sx={{ textAlign: 'center' }}
                            >
                              {el.groupName}
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
                              {el.topics > 1
                                ? `${el.topics} posts`
                                : `${el.topics} post`}
                            </Typography>
                            <Typography
                              variant='body2'
                              color='text.secondary'
                              gutterBottom
                            >
                              {el.users > 1
                                ? `${el.users} members`
                                : `${el.users} member`}
                            </Typography>
                          </Box>
                        </CardContent>
                      </Link>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid
                          container
                          spacing={{}}
                          columns={{ xs: 12, sm: 12, md: 12 }}
                          sx={{ background: '#edebeb' }}
                        >
                          <Grid item xs={8} sm={8} md={8}>
                            <Box
                              sx={{
                                width: '100%',
                              }}
                            >
                              <Typography
                                variant='caption'
                                color='text.secondary'
                                sx={{ px: 2 }}
                              >
                                started By:
                              </Typography>

                              <CardHeader
                                avatar={
                                  <Avatar
                                    sx={{
                                      width: 25,
                                      height: 25,
                                      cursor: 'pointer',
                                    }}
                                    aria-label='createdBy'
                                    src={el.startedBy.avatar}
                                  />
                                }
                                title={`${el.startedBy.firstName} ${el.startedBy.lastName}`}
                                subheader={getDateShortWithoutWeek(
                                  el.createdAt
                                )}
                                sx={{ color: 'text.secondary' }}
                                titleTypographyProps={{ fontSize: 10 }}
                                subheaderTypographyProps={{ fontSize: 10 }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={4} sm={4} md={4}>
                            {user._id !== el.startedBy._id && (
                              <Box
                                sx={{
                                  textAlign: 'end',
                                  width: '100%',
                                  height: '100%',
                                  display: 'flex',
                                  justifyContent: 'flex-start',
                                  alignItems: 'flex-end',
                                  py: 1,
                                }}
                              >
                                <GroupRequest
                                  groupId={el._id}
                                  isPendingMember={el.isPendingMember}
                                  isMember={el.isMember}
                                  action={handleGroupActions}
                                />
                              </Box>
                            )}
                          </Grid>
                        </Grid>
                      </Box>
                    </Card>
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
          </>
        )}
        {!loading && groupRooms.length === 0 && (
          <Card sx={{ height: '25vh', maxWidth: 250, m: 'auto' }}>
            <CardContent>
              <Typography variant='h5' sx={{ textAlign: 'center' }}>
                No Group in This Forum!
              </Typography>
              <Box sx={{ textAlign: 'center', width: '100%', mt: 5 }}>
                <Typography
                  variant='caption'
                  color='text.secondary'
                  sx={{ textAlign: 'center' }}
                >
                  You can create a group and invite members to join!
                </Typography>
              </Box>
            </CardContent>
          </Card>
        )}
        {loading && <>Loading...</>}
      </Container>
      <RequestFeedback
        savingMessage={savingMessage}
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

export default SingleForum;
