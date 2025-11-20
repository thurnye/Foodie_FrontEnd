import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { Warning } from '@mui/icons-material';

interface DeletePageDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  pageType: 'extra' | 'recipe';
  pageName?: string;
}

const DeletePageDialog: React.FC<DeletePageDialogProps> = ({
  open,
  onClose,
  onConfirm,
  pageType,
  pageName,
}) => {
  const title = pageType === 'extra' ? 'Delete Page' : 'Remove Recipe';
  const message = pageType === 'extra'
    ? `Are you sure you want to delete "${pageName || 'this page'}"? This action cannot be undone.`
    : `Are you sure you want to remove "${pageName || 'this recipe'}" from the book? This action cannot be undone.`;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          pb: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: 'error.light',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'error.main',
          }}
        >
          <Warning />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </DialogTitle>

      <DialogContent sx={{ pt: 3, pb: 2 }}>
        <Typography variant="body1" color="text.secondary">
          {message}
        </Typography>
      </DialogContent>

      <DialogActions
        sx={{
          px: 3,
          pb: 2.5,
          pt: 1,
          gap: 1,
        }}
      >
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            borderRadius: 1.5,
            textTransform: 'none',
            px: 3,
            py: 1,
            fontWeight: 500,
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            onConfirm();
            onClose();
          }}
          variant="contained"
          color="error"
          sx={{
            borderRadius: 1.5,
            textTransform: 'none',
            px: 3,
            py: 1,
            fontWeight: 600,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)',
            },
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeletePageDialog;
