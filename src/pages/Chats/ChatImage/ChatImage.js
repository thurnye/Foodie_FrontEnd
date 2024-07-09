import React from 'react';
import styles from './ChatImage.module.css';
import DialogActions from '@mui/material/DialogActions';
import ModalDialog from '../../../components/ModalDialog/ModalDialog';
import CustomizedButton from '../../../components/CustomizedButton/CustomizedButton';


const ChatImage = ({open, setOpen, image, imagePreview, setImage, setImagePreview, socket, roomId, userId, receiverId, chatType}) => {
  
  const handleSendImage = () => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const arrayBuffer = reader.result;
        const data = {
          roomId,
          sender: userId,
          receiverId,
          image: arrayBuffer,
          imageName: image.name,
          imageType: image.type,
          chatType
        }
        if(chatType === 'singleChat'){
          socket.emit('sendImage', data);
        }
        if(chatType === 'groupChat'){
          console.log('sending group image')
          socket.emit('sendPrivateGroupImage', data);
        }
        setOpen(!open)
        setImage(null);
        setImagePreview('');
      };
      reader.readAsArrayBuffer(image);
    }
  };

  const handleCancel = () => {
    setOpen(!open)
  }

  return(
  <div className={styles.ChatImage}>
    <ModalDialog open={open} setOpen={setOpen}>
      {imagePreview && (
        <div>
          <img src={imagePreview} alt="Preview"  style={{width: '250px'}}/>
        </div>
      )}
      <DialogActions>
          <CustomizedButton
            variant='text'
            label={'Cancel'}
            // backgroundColor={'#fee86d'}
            id='demo-customized-button'
            disableElevation
            onClick={handleCancel}
            sx={{
              fontSize: 15,
              borderRadius: 1,
              height: 30,
              fontWeight: 700,
              textTransform: 'none',
            }}
          />
          <CustomizedButton
            variant='text'
            label={'Send'}
            // backgroundColor={'#fee86d'}
            id='demo-customized-button'
            disableElevation
            onClick={handleSendImage}
            sx={{
              fontSize: 15,
              borderRadius: 1,
              height: 30,
              fontWeight: 700,
              textTransform: 'none',
            }}
          />
          
        </DialogActions>
      </ModalDialog>
  </div>
)};


export default ChatImage;
