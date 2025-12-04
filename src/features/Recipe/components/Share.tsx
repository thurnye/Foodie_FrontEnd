import React, { useState, useEffect, MouseEvent } from 'react';
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

import { Box, IconButton, Popper, Fade, Paper } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

// ---------- Types ----------
interface ShareProps {
  avatar: string;
  title: string;
  shareUrl: string;
}

type PopperPlacement =
  | 'bottom'
  | 'top'
  | 'left'
  | 'right'
  | 'bottom-start'
  | 'bottom-end'
  | 'top-start'
  | 'top-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end';

// ---------- Component ----------
const Share: React.FC<ShareProps> = ({ avatar, title, shareUrl }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<PopperPlacement>('right');

  const handleClick =
    (newPlacement: PopperPlacement) => (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  // Close Popper when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | any) => {
      if (anchorEl && !anchorEl.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, anchorEl]);

  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      {/* Popper container */}
      <Popper
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={250}>
            <Paper
              sx={{
                width: 110,
                py: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 2,
                boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
              }}
            >
              {/* Share Buttons */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <FacebookShareButton url={shareUrl}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>

                <FacebookMessengerShareButton
                  url={shareUrl}
                  appId="521270401588372"
                >
                  <FacebookMessengerIcon size={32} round />
                </FacebookMessengerShareButton>

                <TwitterShareButton url={shareUrl} title={title}>
                  <XIcon size={32} round />
                </TwitterShareButton>

                <TelegramShareButton url={shareUrl} title={title}>
                  <TelegramIcon size={32} round />
                </TelegramShareButton>

                <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>

                <LinkedinShareButton url={shareUrl}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>

                <PinterestShareButton
                  url={shareUrl}
                  media={`${String(window.location.origin)}/${avatar}`}
                >
                  <PinterestIcon size={32} round />
                </PinterestShareButton>

                <RedditShareButton url={shareUrl} title={title}>
                  <RedditIcon size={32} round />
                </RedditShareButton>

                <TumblrShareButton url={shareUrl} title={title}>
                  <TumblrIcon size={32} round />
                </TumblrShareButton>

                <EmailShareButton url={shareUrl} subject={title} body="body">
                  <EmailIcon size={32} round />
                </EmailShareButton>
              </Box>
            </Paper>
          </Fade>
        )}
      </Popper>

      {/* Share Icon */}
      <IconButton onClick={handleClick('right')} aria-label="share">
        <ShareIcon
          sx={{
            cursor: 'pointer',
            color: 'text.secondary',
            '&:hover': { color: 'primary.main' },
          }}
        />
      </IconButton>
    </Box>
  );
};

export default Share;
