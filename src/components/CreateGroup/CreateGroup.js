import React, { useState, useEffect } from 'react';
import styles from './CreateGroup.module.css';
import Box from '@mui/material/Box';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import CustomizedButton from '../CustomizedButton/CustomizedButton';
import ModalDialog from '../ModalDialog/ModalDialog';
import RequestFeedback from '../RequestFeedback/RequestFeedback';
import services from '../../util/services';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { chatsActions } from '../../store/chatSlice';
import Unsplash from '../Unsplash/Unsplash';
import { convertToBase64 } from '../../util/commons';
import {Stack} from '@mui/material';
import FileUpload from '../FileUpload/FileUpload';
import Avatar from '@mui/material/Avatar';


const CreateGroup = ({ setNewGroup, showIcon, showButton, isPrivate }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const constPrivateList = useSelector((state) => state.chatData.chatLists);
  const user = useSelector((state) => state.userLog.user?.user);
  const forumId = location.state?.forumId;
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [open, setOpen] = useState(false);
  const [groupAvatar, setGroupAvatar] = useState('');
  const [openUnsplash, setOpenUnsplash] = React.useState(false);

  // FeedBack States
  const [reqOpen, setReqOpen] = useState(false);
  const [reqLoading, setReqLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [message, setMessage] = useState('');

  const handleSave = async () => {
    try {
      let res;
      if (groupName) {
        const data = {
          groupName,
          groupAvatar,
          forumId,
          startedBy: user._id,
          groupMembers: [user._id],
          groupDescription,
        };
        setIsError(false);
        setSaved(false);
        setShowCancel(false);
        setReqLoading(true);
        setReqOpen(!reqOpen);
        setMessage('');
        setOpen(!open);
        if (isPrivate) {
          res = await services.postPrivateGroup(data);
        }
        if (!isPrivate) {
          res = await services.postGroup(data);
        }
        if (res.data) {
          if (isPrivate) {
            const lists = [...constPrivateList];
            lists.unshift({ ...res.data, type: 'groupChat' });
            dispatch(chatsActions.getChatsList(lists));
          } else {
            setNewGroup(res.data);
          }
          setGroupName('');
          setReqLoading(false);
          setSaved(true);
          setMessage('Group Created Successfully');
          setGroupAvatar('')
        }
      }
    } catch (error) {
      console.error(error);
      setReqLoading(false);
      console.log('ERROR:::', error);
      const errMsg = error.response.data;
      setMessage(errMsg ? errMsg : 'Something Went Wrong');
      setShowCancel(false);
      setSaved(false);
      setIsError(true);
      setReqOpen(!reqOpen);
      
    }
  };

  return (
    <Box className={styles.CreateGroup}>
      {showIcon && (
        <IconButton
          onClick={() => setOpen(!open)}
          aria-label='open drawer'
          edge='start'
          sx={{ mx: 2 }}
        >
          <GroupAddIcon />
        </IconButton>
      )}
      {showButton && (
        <CustomizedButton
          variant='text'
          label={'Create Group'}
          id='demo-customized-button'
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          disableElevation
          onClick={() => setOpen(!open)}
          sx={{
            fontSize: { xs: 15, md: 18 },
            borderRadius: 0,
            height: 40,
            textTransform: 'none',
          }}
        />
      )}
      <ModalDialog
        setOpen={setOpen}
        open={open}
        title={'Create A Group'}
        size={'lg'}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 2
          }}
        >
          <Box>
            <Avatar alt={``} src={groupAvatar} sx={{ width: 130, height: 130 }} />
          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
            <Stack spacing={2} direction='row'>
              <FileUpload
                multiple={false}
                getFile={async (files) => {
                  console.log('FILES:::', files);
                  const imgAvatar = await convertToBase64(files);
                  setGroupAvatar(imgAvatar);
                }}
              />
              <Unsplash
                multi={false}
                open={openUnsplash}
                setOpen={setOpenUnsplash}
                setSelectedImages={(images) => {
                  setGroupAvatar(images[0]);
                }}
                selectedImages={[groupAvatar]}
                showButton={true}
              />
            </Stack>
          </Box>
        </Box>
        <TextField
          size='small'
          fullWidth={true}
          id='outlined-controlled'
          value={groupName}
          onChange={(event) => {
            setGroupName(event.target.value);
          }}
          sx={{ width: isPrivate ? '100%' : '30vw', mb: 3 }}
          placeholder='Group Name'
        />
        {isPrivate && (
          <TextField
            size='small'
            id='outlined-multiline-flexible'
            placeholder='Group Description'
            multiline
            fullWidth={true}
            rows={4}
            onChange={(e) => setGroupDescription(e.target.value)}
          />
        )}
        <DialogActions>
          <CustomizedButton
            variant='text'
            label={'Cancel'}
            id='demo-customized-button'
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            disableElevation
            onClick={() => {
              setOpen(!open);
              setGroupName('');
              setGroupAvatar('')
              setGroupDescription('')
            }}
            sx={{
              fontSize: { xs: 15, md: 18 },
              borderRadius: 0,
              height: 40,
              textTransform: 'none',
            }}
          />
          <CustomizedButton
            variant='text'
            label={'Create'}
            id='demo-customized-button'
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            disableElevation
            onClick={handleSave}
            sx={{
              fontSize: { xs: 15, md: 18 },
              borderRadius: 0,
              height: 40,
              textTransform: 'none',
            }}
          />
        </DialogActions>
      </ModalDialog>

      <RequestFeedback
        successMessage={message}
        errorMessage={message}
        open={reqOpen}
        loading={reqLoading}
        setOpen={setReqOpen}
        isError={isError}
        saved={saved}
        showCancel={showCancel}
        handleError={() => setReqOpen(!reqOpen)}
        errorBtnLabel={'close'}
        handleSuccess={() => {
          setReqOpen(!reqOpen);
        }}
        successBtnLabel={'close'}
      />
    </Box>
  );
};

export default CreateGroup;
