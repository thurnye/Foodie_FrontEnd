import React, { useState } from 'react';
import styles from './CreateForum.module.css';
import CustomizedButton from '../../../components/CustomizedButton/CustomizedButton';
import Box from '@mui/material/Box';
import ModalDialog from '../../../components/ModalDialog/ModalDialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import services from '../../../util/services';

const CreateForum = ({ setNewForum }) => {
  const [open, setOpen] = useState(false);
  const [forumName, setForumName] = useState('');

  const handleSave = async () => {
    try {
      if (forumName) {
        const data = {
          forumName,
        };
        const res = await services.postForum(data);
        setNewForum(res.data);
      }
      setOpen(!open);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box className={styles.CreateForum}>
      <CustomizedButton
        variant='text'
        label={'Create Forum'}
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
        title={'Create A Forum'}
        size={'md'}
      >
        <DialogContent>
          <TextField
            size='small'
            fullWidth={true}
            id='outlined-controlled'
            value={forumName}
            onChange={(event) => {
              setForumName(event.target.value);
            }}
            sx={{ width: '30vw' }}
          />
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
              setForumName('');
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
            aria-haspopup='true'
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
    </Box>
  );
};

export default CreateForum;
