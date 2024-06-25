import React from 'react';
import styles from './ChatMessageCard.module.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { useSelector } from 'react-redux';
// {
//   sender: {
//     _id: '6676fd6e249999c6148445eb',
//     firstName: 'Alice',
//     lastName: 'Johnson',
//     avatar: 'https://example.com/avatar/alice.jpg',
//   },
//   message: 'U2FsdGVkX1+R9lY4s4KsG9QzOht0yBlglX6zRwxgt24=',
//   readBy: [
//     '60c72b2f4f1a4e1d8c8b4562',
//     '60c72b2f4f1a4e1d8c8b4563',
//     '60c72b2f4f1a4e1d8c8b4564',
//   ],
//   createdAt: '2023-06-23T10:00:00.000Z',
// },

const ChatMessageCard = ({ chat }) => {
  const user = useSelector((state) => state.userLog.user?.user);

  const isUserChat = chat.sender._id.toString() === user._id;

  return (
    <Box
      className={styles.ChatMessageCard}
      sx={{
        display: 'flex',
        justifyContent: isUserChat ? 'flex-end' : 'flex-start',
      }}
    >
      <Box sx={{ 
        maxWidth: '80%', 
        flexGrow: 1, mb: 3 }}>
        <Card sx={{ border: 'none', boxShadow: 'none' }}>
          <Typography
            variant='body2'
            sx={{
              px: 3,
              py: 1.5,
              textAlign: isUserChat ? 'end' : 'start',
            }}
          >
            {chat.message}
          </Typography>
        </Card>
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
      </Box>
    </Box>
  );
};

export default ChatMessageCard;
