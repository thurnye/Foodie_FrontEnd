import React, { useEffect } from 'react';
import styles from './Share.module.css';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  XIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import ShareIcon from '@mui/icons-material/Share';
import { Box } from '@mui/material';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

const Share = ({avatar, title, shareUrl}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };


  // Close Popper when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (anchorEl && !anchorEl.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Clean up the event listener when the component unmounts or `open` changes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, anchorEl]);

  return (
    <Box className={styles.Share}>
      <Box>
        <Popper
          sx={{ zIndex: 1200 }}
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper sx={{ width: 100 }}>
                <Box
                  className='Demo__container'
                  sx={{
                    py: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box sx={{ p: 1 }}>
                    <FacebookShareButton url={shareUrl}>
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                  </Box>

                  <Box sx={{ p: 1 }}>
                    <FacebookMessengerShareButton
                      url={shareUrl}
                      appId='521270401588372'
                    >
                      <FacebookMessengerIcon size={32} round />
                    </FacebookMessengerShareButton>
                  </Box>

                  <Box sx={{ p: 1 }}>
                    <TwitterShareButton url={shareUrl} title={title}>
                      <XIcon size={32} round />
                    </TwitterShareButton>
                  </Box>

                  <Box sx={{ p: 1 }}>
                    <TelegramShareButton url={shareUrl} title={title}>
                      <TelegramIcon size={32} round />
                    </TelegramShareButton>
                  </Box>

                  <Box sx={{ p: 1 }}>
                    <WhatsappShareButton
                      url={shareUrl}
                      title={title}
                      separator=':: '
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </Box>

                  <Box sx={{ p: 1 }}>
                    <LinkedinShareButton url={shareUrl}>
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                  </Box>

                  <Box sx={{ p: 1 }}>
                    <PinterestShareButton
                      url={String(window.location)}
                      media={`${String(window.location)}/${avatar}`}
                    >
                      <PinterestIcon size={32} round />
                    </PinterestShareButton>
                  </Box>

                  <Box sx={{ p: 1 }}>
                    <RedditShareButton
                      url={shareUrl}
                      title={title}
                      windowWidth={660}
                      windowHeight={460}
                    >
                      <RedditIcon size={32} round />
                    </RedditShareButton>
                  </Box>

                  <Box sx={{ p: 1 }}>
                    <TumblrShareButton url={shareUrl} title={title}>
                      <TumblrIcon size={32} round />
                    </TumblrShareButton>
                  </Box>

                  <Box sx={{ p: 1 }}>
                    <EmailShareButton
                      url={shareUrl}
                      subject={title}
                      body='body'
                    >
                      <EmailIcon size={32} round />
                    </EmailShareButton>
                  </Box>
                </Box>
              </Paper>
            </Fade>
          )}
        </Popper>

        <Box>
          <IconButton onClick={handleClick('right')}>
            <ShareIcon
              sx={{
                // color: '#e60023',
                cursor: 'pointer',
              }}
              aria-label='share'
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Share;
