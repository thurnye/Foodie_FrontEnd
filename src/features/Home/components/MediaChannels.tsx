import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Stack,
  useTheme,
  Paper,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { SocialLink } from '../types/home.types';
import { brandColors, defaultLinks } from '../mock/home.mock';
import BorderBoxTextLayout from '../../../app/components/Layouts/BorderBoxTextLayout';

interface MediaChannelsProps {
  links?: SocialLink[];
}

const MediaChannels: React.FC<MediaChannelsProps> = ({
  links = defaultLinks,
}) => {
  const theme = useTheme();

  const getIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return faFacebook;
      case 'twitter':
        return faXTwitter;
      case 'instagram':
        return faInstagram;
      case 'pinterest':
        return faPinterest;
      default:
        return faFacebook;
    }
  };

  return (
    <BorderBoxTextLayout title={'FOLLOW US'}>
      <Stack
        direction='row'
        justifyContent='center'
        spacing={2.5}
        sx={{ mt: 1 }}
      >
        {links.map((link) => {
          const isGradient = link.platform === 'instagram';
          const color = brandColors[link.platform];
          return (
            <IconButton
              key={link.platform}
              component='a'
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                width: 42,
                height: 42,
                borderRadius: '50%',
                color:
                  link.platform === 'twitter'
                    ? '#fff'
                    : theme.palette.common.white,
                background:
                  isGradient && color.startsWith('linear')
                    ? color
                    : color || theme.palette.grey[700],
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.2)',
                  boxShadow: `0 4px 10px rgba(0,0,0,0.25)`,
                  background:
                    isGradient && color.startsWith('linear')
                      ? color
                      : color || theme.palette.grey[700],
                },
              }}
            >
              <FontAwesomeIcon icon={getIcon(link.platform)} size='lg' />
            </IconButton>
          );
        })}
      </Stack>
    </BorderBoxTextLayout>
  );
};

export default MediaChannels;
