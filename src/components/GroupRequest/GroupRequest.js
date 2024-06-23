import React, { useState } from 'react';
import styles from './GroupRequest.module.css';
import CustomizedButton from '../CustomizedButton/CustomizedButton';
import RequestFeedback from '../RequestFeedback/RequestFeedback';
import services from '../../util/services';
import { useSelector } from 'react-redux';


const groupActions = {
  pending: 'pending',
  groupExit: 'exit',
};


const GroupRequest = ({
  groupId,
  isPendingMember,
  isMember,
  action
}) => {
  const user = useSelector((state) => state.userLog.user?.user);
  // FeedBack States
  const [open, setOpen] = useState(false);
  const [reqLoading, setReqLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [message, setMessage] = useState('');
  const [savingMessage, setSavingMessage] = useState('');

  
console.log(isPendingMember)

  

  const handleJoinOrLeaveGroup = async () => {
    try {
      setIsError(false);
      setSaved(false);
      setShowCancel(false);
      setReqLoading(false);
      setOpen(!open);
      setMessage('');
      setOpen(!open);
      setSavingMessage('Sending Request');
      const data = { userId: user._id, groupId };
      console.log(data);
      const result = await services.postGroupRequest(data);
      console.log(result);
      
      if (result.data === groupActions.pending) {
        action && action(groupActions.pending, groupId)
        setSaved(true);
        setMessage('Request To Join Group Sent');
      }
      if (result.data === groupActions.groupExit) {
        action && action(groupActions.pending, groupId)
        setSaved(true);
        setMessage('Successfully Existed Group');
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
      setOpen(!open);
    }
  };

  return (
    <div className={styles.GroupRequest}>
      <CustomizedButton
        variant='text'
        label={
          isPendingMember
            ? ' Pending'
            : isMember
            ? 'Leave Group'
            : 'Join Group'
        }
        id='join-group-button'
        disableElevation
        onClick={() => handleJoinOrLeaveGroup(groupId)}
        disabled={isPendingMember}
        sx={{
          fontSize: 12,
          borderRadius: 0,
          textTransform: 'none',
          textWrap: 'nowrap',
          mr: isPendingMember ? 3 : '',
        }}
      />

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

export default GroupRequest;
