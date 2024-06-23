import React, { useEffect, useState } from 'react';
import styles from './SingleGroup.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import parser from 'html-react-parser';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  getDateShortWithoutWeek,
  getRandomInt,
  truncateTextLong,
} from '../../../util/commons';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CustomizedButton from '../../../components/CustomizedButton/CustomizedButton';
import services from '../../../util/services';
import PaginationNav from '../../../components/PaginationNav/PaginationNav';
import CreatePanelDiscussion from '../CreatePanelDiscussion/CreatePanelDiscussion';
import BackNavigation from '../../../components/BackNavigation/BackNavigation';
import RequestFeedback from '../../../components/RequestFeedback/RequestFeedback';
import GroupRequest from '../../../components/GroupRequest/GroupRequest';


const SingleGroup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const groupId = location.state?.groupId;
  const forumId = location.state?.forumId;
  const [newGroupPanel, setNewGroupPanel] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingPanels, setLoadingPanels] = useState(true);
  const [groupInfo, setGroupInfo] = useState(null);
  const [groupDiscussionPanels, setGroupDiscussionPanels] = useState([]);

  // FeedBack States
  const [open, setOpen] = useState(false);
  const [reqLoading, setReqLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [message, setMessage] = useState('');

  const fetchGroups = async (groupId) => {
    try {
      setIsError(false);
      setSaved(false);
      setMessage('');
      setShowCancel(false);
      const result = await services.getGroup(groupId);
      console.log(result.data)
      setGroupInfo(result.data);
      setLoading(false);
    } catch (error) {
      const errMsg = error.response.data;
      console.log(error.response.data);
      setMessage(errMsg);
      setShowCancel(false);
      setSaved(false);
      setIsError(true);
      setOpen(!open);
    }
  };

  const approveRequest = async (userId) => {
    try {
      setIsError(false);
      setSaved(false);
      setMessage('');
      setShowCancel(false);
      const result = await services.postApproveRequest({groupId, userId, forumId: groupInfo.forumId});
      console.log(result.data)
      if (result.data === 'confirm') {
        const find = groupInfo.pendingGroupMembers.find(el => el._id.toString() === userId.toString());
        if (find) {
          setGroupInfo(prev => ({
            ...prev,
            groupMembers: [find, ...prev.groupMembers], 
            pendingGroupMembers: prev.pendingGroupMembers.filter(el => el._id.toString() !== userId.toString()), 
          }));
        }
      }
      // setGroupInfo(result.data);
      setLoading(false);
    } catch (error) {
      const errMsg = error.response.data;
      console.log(error.response.data);
      setMessage(errMsg);
      setShowCancel(false);
      setSaved(false);
      setIsError(true);
      setOpen(!open);
    }
  };

  const fetchGroupPanels = async (query) => {
    try {
      setIsError(false);
      setSaved(false);
      setMessage('');
      setShowCancel(false);
      const result = await services.getGroupDiscussionPanels(query);
      setGroupDiscussionPanels(result.data.groupPanels);
      setCount(result.data.count);
      setLoadingPanels(false);
    } catch (error) {
      console.log(error);
      const errMsg = error.response.data;
      setMessage(errMsg);
      setShowCancel(false);
      setSaved(false);
      setIsError(true);
      setOpen(!open);
    }
  };

  useEffect(() => {
    groupId && fetchGroupPanels({ currentPage, perPage, groupId });
  }, [currentPage, groupId, perPage]);

  useEffect(() => {
    if (newGroupPanel) {
      setGroupDiscussionPanels((prevPanels) => [newGroupPanel, ...prevPanels]);
    }
  }, [newGroupPanel]);

  useEffect(() => {
    groupId && fetchGroups(groupId);
  }, [groupId]);

  return (
    <div className={styles.SingleGroup}>
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
            label={'Back'}
            onClick={() =>
              navigate(`/forums/forum/${forumId},`, { state: { forumId } })
            }
          />

          <CreatePanelDiscussion setNewGroupPanel={setNewGroupPanel} />
        </Box>
        {/* Small Screen */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Box sx={{ flexGrow: 1, my: 5 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 12, sm: 12, md: 12 }}
            >
              {groupDiscussionPanels.map((panel) => (
                <Grid item xs={12} sm={12} md={12} key={panel._id}>
                  <Link
                    to={{
                      pathname: `/forum-room`,
                    }}
                    state={{ panelId: panel._id }}
                  >
                    <Card sx={{ cursor: 'pointer' }}>
                      {/* <CardContent> */}
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid
                          container
                          spacing={{ xs: 2, md: 3 }}
                          columns={{ xs: 12, sm: 12, md: 12 }}
                          sx={{ background: '#edebeb' }}
                        >
                          <Grid item xs={8} sm={8} md={8}>
                            <Box
                              sx={{
                                width: '100%',
                              }}
                            >
                              <CardHeader
                                avatar={
                                  <Avatar
                                    sx={{}}
                                    src={panel.startedBy.avatar}
                                    alt={`${panel.startedBy.firstName}`}
                                  />
                                }
                                title={`${panel.startedBy.firstName} ${panel.startedBy.lastName}`}
                                sx={{ color: 'text.secondary' }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={4} sm={4} md={4}>
                            <Box
                              sx={{
                                textAlign: 'end',
                                width: '100%',
                                px: 3,
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                              }}
                            >
                              <Typography
                                variant='caption'
                                color='text.secondary'
                              >
                                <i>
                                  {getDateShortWithoutWeek(panel.createdAt)}
                                </i>
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>

                      {/* Post Contents */}
                      <Box>
                        <CardContent>
                          <Typography
                            variant='body2'
                            color='text.secondary'
                            gutterBottom
                          >
                            {panel.panel &&
                              truncateTextLong(parser(panel.panel), 70)}
                          </Typography>
                        </CardContent>
                      </Box>

                      <Box sx={{ flexGrow: 1 }}>
                        <Grid
                          container
                          spacing={{ xs: 2, md: 3 }}
                          columns={{ xs: 12, sm: 12, md: 12 }}
                          sx={{ background: '#edebeb' }}
                        >
                          <Grid item sx={{ p: '5px !important' }}>
                            <Box
                              sx={{
                                width: '100%',
                                px: 3,
                                display: 'flex',
                              }}
                            >
                              <Box sx={{ mr: 2 }}>
                                <FavoriteBorderIcon
                                  sx={{
                                    fontSize: 15,
                                    mr: '1px',
                                    color: 'text.secondary',
                                  }}
                                />
                                <Typography
                                  variant='caption'
                                  color='text.secondary'
                                  gutterBottom
                                >
                                  {panel.likes > 0 && panel.likes}
                                </Typography>
                              </Box>
                              <Box sx={{ mr: 2 }}>
                                <ChatBubbleOutlineIcon
                                  sx={{
                                    fontSize: 15,
                                    mr: '1px',
                                    color: 'text.secondary',
                                  }}
                                />
                                <Typography
                                  variant='caption'
                                  color='text.secondary'
                                  gutterBottom
                                >
                                  {panel.comments > 0 && panel.comments}
                                </Typography>
                              </Box>
                              <Box sx={{ mr: 2 }}>
                                <PeopleOutlineIcon
                                  sx={{
                                    fontSize: 15,
                                    mr: '1px',
                                    color: 'text.secondary',
                                  }}
                                />
                                <Typography
                                  variant='caption'
                                  color='text.secondary'
                                  gutterBottom
                                >
                                  {panel.membersInPanels > 0 &&
                                    panel.membersInPanels}
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>

                      {/* </CardContent> */}
                    </Card>
                  </Link>
                </Grid>
              ))}
              {!loading && groupDiscussionPanels.length === 0 && (
                <Card sx={{ maxWidth: 350, m: 'auto' }}>
                  <CardContent>
                    <Typography
                      variant='body1'
                      sx={{ textAlign: 'center' }}
                      color='text.secondary'
                    >
                      No discussion in the group yet!.
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Grid>
          </Box>
        </Box>

        {/* large Screen */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            <Grid item xs={8} sm={8} md={8}>
              <Box
                sx={{
                  maxWidth: 800,
                  m: 'auto',
                }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  {groupDiscussionPanels.map((panel) => (
                    <Card sx={{ mb: 3 }} key={panel._id}>
                      <Grid container spacing={0}>
                        <Grid item xs={4}>
                          <Box
                            sx={{
                              height: '100%',
                              borderRight: '2px dotted #eaeaea',
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                p: 3,
                                height: '100%',
                              }}
                            >
                              <Avatar
                                src={panel.startedBy.avatar}
                                alt={panel.startedBy.firstName}
                              />
                              <Typography
                                variant='body2'
                                color='text.secondary'
                                gutterBottom
                              >
                                {`${panel.startedBy.firstName} ${panel.startedBy.lastName}`}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={8}>
                          {/* panel Contents */}
                          <Box
                            sx={{
                              p: 3,
                            }}
                          >
                            <Typography
                              variant='body2'
                              color='text.secondary'
                              gutterBottom
                            >
                              {panel.panel &&
                                truncateTextLong(parser(panel.panel), 70)}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      <Box
                        sx={{
                          width: '100%',
                          px: 3,
                          display: 'flex',
                          background: '#edebeb',
                        }}
                      >
                        <Box sx={{ display: 'inherit' }}>
                          <Box sx={{ mr: 2, cursor: 'pointer' }}>
                            <FavoriteBorderIcon
                              sx={{
                                fontSize: 15,
                                mr: '1px',
                                color: 'text.secondary',
                              }}
                            />
                            <Typography
                              variant='caption'
                              color='text.secondary'
                              gutterBottom
                            >
                              {panel.likes > 0 && panel.likes}
                            </Typography>
                          </Box>
                          <Box sx={{ mr: 2, cursor: 'pointer' }}>
                            <ChatBubbleOutlineIcon
                              sx={{
                                fontSize: 15,
                                mr: '1px',
                                color: 'text.secondary',
                              }}
                            />
                            <Typography
                              variant='caption'
                              color='text.secondary'
                              gutterBottom
                            >
                              {panel.comments > 0 && panel.comments}
                            </Typography>
                          </Box>
                          <Box sx={{ mr: 2, cursor: 'pointer' }}>
                            <PeopleOutlineIcon
                              sx={{
                                fontSize: 15,
                                mr: '1px',
                                color: 'text.secondary',
                              }}
                            />
                            <Typography
                              variant='caption'
                              color='text.secondary'
                              gutterBottom
                            >
                              {panel.membersInPanels > 0 &&
                                panel.membersInPanels}
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ flexGrow: 1, textAlign: 'end' }}>
                          <Typography variant='caption' color='text.secondary'>
                            <i>{getDateShortWithoutWeek(panel.createdAt)}</i>
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  ))}
                  {!loading && groupDiscussionPanels.length === 0 && (
                    <Card sx={{ boxShadow: 'none' }}>
                      <CardContent>
                        <Typography
                          variant='h5'
                          sx={{ textAlign: 'center' }}
                          color='text.secondary'
                        >
                          No discussion in the group yet!.
                        </Typography>
                      </CardContent>
                    </Card>
                  )}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Box sx={{ height: '100%', pb: 3 }}>
                <Card sx={{ height: '100%' }}>
                  <Box>
                    <CardContent>
                      <Box>
                        <Box sx={{ textAlign: 'end' }}>
                          <GroupRequest
                            groupId={groupId}
                            isPendingMember={false}
                            isMember={true}
                            action={() =>
                              navigate(`/forums/forum/${forumId},`, {
                                state: { forumId },
                              })
                            }
                          />
                        </Box>
                        <Typography variant='body2'>
                          Pending Join Group Request
                        </Typography>
                        <Box
                          sx={{ my: 3, maxHeight: '30vh', overflow: 'auto' }}
                        >
                          {!loading &&
                            groupInfo?.pendingGroupMembers.length < 1 && (
                              <Box sx={{ p: 2, bgcolor: '#fafafa' }}>
                                <Typography
                                  sx={{
                                    fontSize: 14,
                                    textAlign: 'center',
                                    p: 3,
                                  }}
                                  color='text.secondary'
                                  gutterBottom
                                >
                                  No Pending Request
                                </Typography>
                              </Box>
                            )}
                          {!loading &&
                            groupInfo?.pendingGroupMembers.length > 0 && (
                              <List
                                dense
                                sx={{
                                  width: '100%',
                                  maxWidth: 360,
                                  bgcolor: '#fafafa',
                                  p: 1,
                                }}
                              >
                                {groupInfo?.pendingGroupMembers.map(
                                  (pendingMember, i) => {
                                    // const labelId = `checkbox-list-secondary-label-${value}`;
                                    return (
                                      <>
                                        <ListItem
                                          key={pendingMember._id}
                                          secondaryAction={
                                            <CustomizedButton
                                              variant='text'
                                              label={'Approve'}
                                              id='join-group-button'
                                              disableElevation
                                              onClick={() => approveRequest(pendingMember._id)}
                                              sx={{
                                                fontSize: 12,
                                                borderRadius: 0,
                                                textTransform: 'none',
                                                textWrap: 'nowrap',
                                                ml: 1,
                                                mr: -2,
                                              }}
                                            />
                                          }
                                          disablePadding
                                        >
                                          <ListItemAvatar>
                                            <Avatar
                                              alt={`${pendingMember.firstName}`}
                                              src={pendingMember.avatar}
                                              sx={{ width: 30, height: 30 }}
                                            />
                                          </ListItemAvatar>
                                          <ListItemText
                                            id={getRandomInt()}
                                            primary={`${pendingMember.firstName} ${pendingMember.lastName}`}
                                            primaryTypographyProps={{
                                              sx: { width: '60%', ml: -2 },
                                            }}
                                          />
                                        </ListItem>
                                        <Divider sx={{ my: 0.5 }} />
                                      </>
                                    );
                                  }
                                )}
                              </List>
                            )}
                        </Box>
                      </Box>

                      {/* Members List */}
                      <Box>
                        <Typography variant='body2'>Group Members</Typography>
                        <Box
                          sx={{ my: 3, maxHeight: '30vh', overflow: 'auto' }}
                        >
                          {!loading && groupInfo?.groupMembers.length < 1 && (
                            <Box sx={{ p: 2, bgcolor: '#fafafa' }}>
                              <Typography
                                sx={{ fontSize: 14, textAlign: 'center', p: 3 }}
                                color='text.secondary'
                                gutterBottom
                              >
                                No Member
                              </Typography>
                            </Box>
                          )}
                          <List
                            dense
                            sx={{
                              width: '100%',
                              maxWidth: 360,
                              bgcolor: '#fafafa',
                            }}
                          >
                            {groupInfo?.groupMembers.map((member, i) => {
                              return (
                                <>
                                  <ListItem
                                    key={getRandomInt()}
                                    secondaryAction={
                                      <CustomizedButton
                                        variant='text'
                                        id='join-group-button'
                                        disableElevation
                                        startIcon={<ChatBubbleOutlineIcon />}
                                        onClick={() => ''}
                                        sx={{
                                          fontSize: 12,
                                          borderRadius: 0,
                                          textTransform: 'none',
                                          textWrap: 'nowrap',
                                          ml: 1,
                                          mr: -2,
                                        }}
                                      />
                                    }
                                    disablePadding
                                  >
                                    <ListItemAvatar>
                                      <Avatar
                                        alt={`${member.firstName}`}
                                        src={member.avatar}
                                        sx={{ width: 30, height: 30 }}
                                      />
                                    </ListItemAvatar>
                                    <ListItemText
                                      id={getRandomInt()}
                                      primary={`${member.firstName} ${member.lastName}`}
                                      primaryTypographyProps={{
                                        sx: { width: '60%', ml: -2 },
                                      }}
                                    />
                                  </ListItem>
                                  <Divider sx={{ my: 0.5 }} />
                                </>
                              );
                            })}
                          </List>
                        </Box>
                      </Box>
                    </CardContent>
                  </Box>
                </Card>
              </Box>
            </Grid>
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

export default SingleGroup;
