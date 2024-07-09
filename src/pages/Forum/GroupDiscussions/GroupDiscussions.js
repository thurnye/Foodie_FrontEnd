import React, { useEffect, useState } from 'react';
import styles from './GroupDiscussions.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import parser from 'html-react-parser';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  getDateShortWithoutWeek,
  getRandomInt,
  truncateTextLong,
} from '../../../util/commons';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import services from '../../../util/services';
import PaginationNav from '../../../components/PaginationNav/PaginationNav';
import CreatePanelDiscussion from '../CreatePanelDiscussion/CreatePanelDiscussion';
import BackNavigation from '../../../components/BackNavigation/BackNavigation';
import RequestFeedback from '../../../components/RequestFeedback/RequestFeedback';

const perPage= 12;

const GroupDiscussions = () => {
  const location = useLocation();
  const groupId = location.state?.groupId;
  const forumId = location.state?.forumId;
  const navigate = useNavigate();
  const [newGroupPanel, setNewGroupPanel] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [loadingPanels, setLoadingPanels] = useState(true);
  const [groupDiscussionPanels, setGroupDiscussionPanels] = useState([]);

  // FeedBack States
  const [open, setOpen] = useState(false);
  const [reqLoading, setReqLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [message, setMessage] = useState('');




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


  return (
    <div className={styles.GroupDiscussions}>
      <Container maxWidth='lg' sx={{ mt: '-9px', mb: 4 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3
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
          <Box>
          {groupDiscussionPanels.map((panel) => (
          <Link
            to={{
              pathname: `/forums/forum/group/chat`,
            }}
            state={{ panelId: panel._id }}
            key={getRandomInt()}
          >
            <Card sx={{ cursor: 'pointer', mb: 3 }}>
              {/* <CardContent> */}
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 12, sm: 12, md: 12 }}
                  sx={{ background: '#edebeb' }}
                >
                  <Grid item xs={open ? 12 : 8} sm={8} md={8}>
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
                  <Grid item xs={open ? 12 : 4} sm={4} md={4}>
                    <Box
                      sx={{
                        textAlign: 'end',
                        width: '100%',
                        px: 3,
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        mt: { xs: open ? -2 : '' },
                      }}
                    >
                      <Typography
                        variant='caption'
                        color='text.secondary'
                        sx={{ textWrap: 'nowrap' }}
                      >
                        <i>{getDateShortWithoutWeek(panel.createdAt)}</i>
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
                    {panel.panel && truncateTextLong(parser(panel.panel), 70)}
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
                      <Box sx={{ mr: 2, textWrap: 'nowrap' }}>
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
                      <Box sx={{ mr: 2, textWrap: 'nowrap' }}>
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
                      <Box sx={{ mr: 2, textWrap: 'nowrap' }}>
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
                          {panel.membersInPanels > 0 && panel.membersInPanels}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              {/* </CardContent> */}
            </Card>
          </Link>
        ))}
        {!loadingPanels && groupDiscussionPanels.length === 0 && (
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
          </Box>
        </Box>

        {/* large Screen */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
          {groupDiscussionPanels.map((panel) => (
            <Link
              to={{
                pathname: `/forums/forum/group/chat`,
              }}
              state={{ panelId: panel._id }}
              key={panel._id}
            >
              <Card sx={{ mb: 3 }}>
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
                        {panel.membersInPanels > 0 && panel.membersInPanels}
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
            </Link>
          ))}
          {!loadingPanels && groupDiscussionPanels.length === 0 && (
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

export default GroupDiscussions;
