import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Box } from '@mui/material';

// Define props interface
interface VideoPlayerProps {
  link: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ link }) => {
  return (
    <Box
      sx={{
        mx: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: {
          xs: 250, // <= 300px
          sm: 300, // 301px–600px
          md: 400, // 601px–900px
          lg: 560, // > 900px
        },
        aspectRatio: '16/9',
      }}
    >
      <ReactPlayer
        url={link}
        width="100%"
        height="100%"
        style={{
          borderRadius: 8,
          overflow: 'hidden',
        }}
      />
    </Box>
  );
};

export default VideoPlayer;
