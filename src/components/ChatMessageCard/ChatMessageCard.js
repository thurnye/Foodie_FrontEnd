import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { useSelector } from 'react-redux';
import parser from 'html-react-parser';

const ChatMessageCard = ({ chat, isSingle }) => {
  const user = useSelector((state) => state.userLog.user?.user);
  const isUserChat = chat.sender?._id === user._id;

  return (
    <Card
      sx={{
        border: 'none',
        boxShadow: 'none',
        background: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isUserChat ? 'flex-end' : 'flex-start',
        mb: 3,
      }}
    >
      <Box
        sx={{
          width: '80%',
          ...(isUserChat && { marginLeft: '80%' }),
          ...(!isUserChat && { marginRight: '80%' }),
          display: 'flex',
          flexDirection: 'column',
          alignItems: isUserChat ? 'flex-end' : 'flex-start',
        }}
      >
        {chat.image && <>
              <img
               src={`data:${chat.image.contentType};base64,${chat.image.data}`}
                alt={chat.image.name}
                style={{ width: '200px' }}
              />
        </>}
        {chat.message && <>
          <Typography
            variant='body2'
            sx={{
              px: 3,
              py: 1.5,
              backgroundColor: !isUserChat ? '#e0f7fa' : '#ffffff',
              textAlign: 'start',
              wordWrap: 'break-word',
              whiteSpace: 'pre-wrap',
              overflowWrap: 'break-word',
            }}
          >
            {parser(chat.message)}
          </Typography>
        </>}
      </Box>
      {!isSingle && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: isUserChat ? 'flex-end' : 'flex-start',
          }}
        >
          <CardHeader
            sx={{
              p: 0.5,
            }}
            avatar={
              <Avatar
                alt={`${chat.sender.firstName}`}
                src={chat.sender.avatar}
                sx={{ width: 15, height: 15 }}
              />
            }
            title={`${chat.sender.firstName} ${chat.sender.lastName}`}
            titleTypographyProps={{
              variant: 'subtitle2',
              sx: { fontSize: 12, ml: '-10px' },
            }}
          />
        </Box>
      )}
    </Card>
  );
};

export default ChatMessageCard;
