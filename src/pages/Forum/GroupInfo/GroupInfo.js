import React, { useEffect, useState } from 'react';
import styles from './GroupInfo.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getRandomInt } from '../../../util/commons';
import Avatar from '@mui/material/Avatar';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CustomizedButton from '../../../components/CustomizedButton/CustomizedButton';

import GroupRequest from '../../../components/GroupRequest/GroupRequest';
import RequestFeedback from '../../../components/RequestFeedback/RequestFeedback';
import services from '../../../util/services';
import { useSelector } from 'react-redux';

export default function GroupInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const groupId = location.state?.groupId;
  const [groupInfo, setGroupInfo] = useState(null);
  const user = useSelector((state) => state.userLog.user?.user);


  // FeedBack States
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    groupId && fetchGroups(groupId);
  }, [groupId]);

  const approveRequest = async (userId) => {
    try {
      setIsError(false);
      setSaved(false);
      setMessage('');
      setShowCancel(false);
      const result = await services.postApproveRequest({
        groupId,
        userId,
        forumId: groupInfo.forumId,
      });
      if (result.data === 'confirm') {
        const find = groupInfo.pendingGroupMembers.find(
          (el) => el._id.toString() === userId.toString()
        );
        if (find) {
          setGroupInfo((prev) => ({
            ...prev,
            groupMembers: [find, ...prev.groupMembers],
            pendingGroupMembers: prev.pendingGroupMembers.filter(
              (el) => el._id.toString() !== userId.toString()
            ),
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

  return (
    <Box
      sx={{ height: '100%', pb: 3, }}
      className={styles.GroupInfo}
    >
      <Card sx={{ height: '100%' }}>
        <Box>
          <CardContent>
            <Box>
              <Box sx={{ textAlign: 'end' }}>
                <GroupRequest
                  groupId={groupInfo?._id}
                  isPendingMember={false}
                  isMember={true}
                  action={() =>
                    navigate(`/forums/forum/${groupInfo?.forumId},`, {
                      state: { forumId: groupInfo?.forumId },
                    })
                  }
                />
              </Box>
              <Typography variant='body2'>
                Pending Join Group Request
              </Typography>
              <Box sx={{ my: 3, maxHeight: '30vh', overflow: 'auto' }}>
                {!loading && groupInfo?.pendingGroupMembers.length < 1 && (
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
                {!loading && groupInfo?.pendingGroupMembers.length > 0 && (
                  <List
                    dense
                    sx={{
                      width: '100%',
                      maxWidth: 360,
                      bgcolor: '#fafafa',
                      p: 1,
                    }}
                  >
                    {groupInfo?.pendingGroupMembers.map((pendingMember, i) => {
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
                                onClick={() =>
                                  approveRequest(pendingMember._id)
                                }
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
                    })}
                  </List>
                )}
              </Box>
            </Box>

            {/* Members List */}
            <Box>
              <Typography variant='body2'>Group Members</Typography>
              <Box sx={{ my: 3, maxHeight: '30vh', overflow: 'auto' }}>
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
                              startIcon={user._id !== member._id ? <ChatBubbleOutlineIcon /> : <></>}
                              onClick={() => navigate(`/forums/forum/chat`, {
                                state: { receiverId: member._id, userId: user._id },
                              })}
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
                            primary={user._id === member._id ? 'You' : `${member.firstName} ${member.lastName}`}
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
    </Box>
  );
}
