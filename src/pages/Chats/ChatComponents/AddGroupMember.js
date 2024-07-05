import React, { useState } from 'react';
import ModalDialog from '../../../components/ModalDialog/ModalDialog';
import CustomizedButton from '../../../components/CustomizedButton/CustomizedButton';
import { DialogActions, DialogContent } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function AddGroupMember({ open, setOpen }) {
  const [email, setEmail] = useState('');

  const handleSave = async () => {
    try {
      if (email) {
        const data = {
          email,
        };
        console.log(data);
        // const res = await services.postForum(data);
        // setNewForum(res.data);
      }
      setOpen(!open);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <ModalDialog
        setOpen={setOpen}
        open={open}
        title={'Add Group Member'}
        size={'sm'}
      >
        <DialogContent>
          <TextField
            label='Email'
            variant='standard'
            size='small'
            fullWidth={true}
            id='outlined-controlled'
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            // sx={{ maxWidth: 350 }}
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
              setEmail('');
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
}

export default AddGroupMember;
