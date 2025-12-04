import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { ICookbookAuthor, isAuthorPopulated, getAuthorName } from '../types/cookbook.types';

interface CookbookAuthorInfoProps {
  author: string | ICookbookAuthor;
  showEmail?: boolean;
  showAboutMe?: boolean;
}

const CookbookAuthorInfo: React.FC<CookbookAuthorInfoProps> = ({
  author,
  showEmail = false,
  showAboutMe = false,
}) => {
  // If author is not populated, show nothing or a placeholder
  if (!isAuthorPopulated(author)) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {/* Author Avatar */}
      <Avatar
        src={author.avatar}
        alt={getAuthorName(author)}
        sx={{ width: 48, height: 48 }}
      >
        {author.firstName.charAt(0)}{author.lastName.charAt(0)}
      </Avatar>

      {/* Author Details */}
      <Box>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {getAuthorName(author)}
        </Typography>

        {showEmail && author.email && (
          <Typography variant="body2" sx={{ color: '#9ca3af' }}>
            {author.email}
          </Typography>
        )}

        {showAboutMe && author.bio && (
          <Typography variant="body2" sx={{ color: '#9ca3af', mt: 0.5 }}>
            {author.bio}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default CookbookAuthorInfo;
