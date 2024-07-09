import React, { useState, useEffect } from 'react';
import styles from './CreatePanelDiscussion.module.css';
import CustomizedButton from '../../../components/CustomizedButton/CustomizedButton';
import Box from '@mui/material/Box';
import ModalDialog from '../../../components/ModalDialog/ModalDialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import services from '../../../util/services';
import CompTextEditor from '../../../components/CompTextEditor/CompTextEditor';
import RequestFeedback from '../../../components/RequestFeedback/RequestFeedback';

const CreatePanelDiscussion = ({setNewGroupPanel}) => {
  const location = useLocation();
  const groupId = location.state?.groupId;
  const [open, setOpen] = useState(false);
  const [panelDiscussion, setPanelDiscussion] = useState('');
  const user = useSelector((state) => state.userLog.user?.user);

  // FeedBack States
  const [reqOpen, setReqOpen] = useState(false);
  const [reqLoading, setReqLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [message, setMessage] = useState('');

  const handleSavePost = async () => {
    try {
      if (panelDiscussion) {
        const data = {
          panel: panelDiscussion,
          groupId,
          startedBy: user._id,
          membersInPanel: [user._id],
        };
        setIsError(false);
        setSaved(false);
        setReqLoading(true);
        setReqOpen(true);
        setMessage('');
        setShowCancel(false);
        setOpen(!open);
        const res = await services.postGroupDiscussionPanel(data);
        console.log('Received savedGroupRoom:', res.data);
        setNewGroupPanel(res.data);
        setPanelDiscussion('');
        setReqLoading(false);
        setSaved(true);
        setMessage('Panel Created Successfully');
      }
    } catch (error) {
      console.error(error);
      setReqLoading(false);
      console.log('ERROR:::', error);
      const errMsg = error.response.data;
      setMessage(errMsg);
      setShowCancel(false);
      setSaved(false);
      setIsError(true);
      setReqOpen(!reqOpen);
    }
  };

  return (
    <div className={styles.CreatePanelDiscussion}>
      <Box className={styles.CreateGroup}>
        <CustomizedButton
          variant='text'
          label={'Open a New Discussion'}
          id='demo-customized-button'
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup='true'
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
        <ModalDialog
          setOpen={setOpen}
          open={open}
          title={"What's on your mind"}
          size={'lg'}
        >
          <DialogContent>
            {/* <TextField
            size='small'
            fullWidth={true}
            id='outlined-controlled'
            value={post}
            onChange={(event) => {
              setPanelDiscussion(event.target.value);
            }}
            sx={{ width: '30vw' }}
          /> */}
            <Box sx={{ width: { xs: 250, sm: 300, md: 500 } }}>
              <CompTextEditor
                setEditorData={(htmlValue) => setPanelDiscussion(htmlValue)}
                show={false}
                placeholder=''
                content={panelDiscussion}
                style={{ width: '100%' }}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <CustomizedButton
              variant='text'
              label={'Cancel'}
              id='demo-customized-button'
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              disableElevation
              onClick={() => {
                setOpen(!open);
                setPanelDiscussion('');
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
              label={'Post'}
              id='demo-customized-button'
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              disableElevation
              onClick={handleSavePost}
              sx={{
                fontSize: { xs: 15, md: 18 },
                borderRadius: 0,
                height: 40,
                textTransform: 'none',
              }}
            />
          </DialogActions>
        </ModalDialog>
      </Box>

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
    </div>
  );
};

export default CreatePanelDiscussion;
