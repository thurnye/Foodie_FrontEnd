import React from 'react';
import ReactPlayer from 'react-player';
import { Box, useMediaQuery, useTheme } from '@mui/material';

interface VideoPlayerProps {
  link: string;
  width?: number | string
  sx?: any
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ link, sx, width }) => {
  const theme = useTheme();

  // Use MUI breakpoints to control width
  const isXs = useMediaQuery(theme.breakpoints.down('sm')); // <600px
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600-900px
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg')); // 900-1200px
  const isLg = useMediaQuery(theme.breakpoints.up('lg')); // >1200px

  let playerWidth =  width || 250;

  if (isXs) playerWidth = 250;
  else if (isSm) playerWidth = 350;
  else if (isMd) playerWidth = 450;
  else if (isLg) playerWidth = 560;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: playerWidth,
        mx: 'auto',
        ...sx
      }}
    >
      <ReactPlayer
        url={link}
        width="100%"
        height="100%"
        style={{
          // maxWidth: playerWidth,
          aspectRatio: '16/9',
          borderRadius: 8,
          overflow: 'hidden',
        }}
      />
    </Box>
  );
};

export default VideoPlayer;
