/**
 * EXAMPLE: How to use author information in your components
 *
 * This file demonstrates how to access and display cookbook author information
 * that is now populated from the backend.
 */

import React from 'react';
import { Box, Typography } from '@mui/material';
import { ICookbook, isAuthorPopulated, getAuthorName } from '../types/cookbook.types';
import CookbookAuthorInfo from '../components/CookbookAuthorInfo';

interface ExampleComponentProps {
  cookbook: ICookbook;
}

export const AuthorUsageExample: React.FC<ExampleComponentProps> = ({ cookbook }) => {
  // Example 1: Using the type guard to check if author is populated
  if (isAuthorPopulated(cookbook.author)) {
    console.log('Author first name:', cookbook.author.firstName);
    console.log('Author last name:', cookbook.author.lastName);
    console.log('Author email:', cookbook.author.email);
    console.log('Author avatar:', cookbook.author.avatar);
    console.log('Author bio:', cookbook.author.bio);
  }

  // Example 2: Using the helper function to get author name
  const authorName = getAuthorName(cookbook.author);
  console.log('Author name:', authorName);

  // Example 3: Conditionally rendering based on author type
  const renderAuthorInfo = () => {
    if (isAuthorPopulated(cookbook.author)) {
      return (
        <Box>
          <Typography variant="h6">
            By {cookbook.author.firstName} {cookbook.author.lastName}
          </Typography>
          {cookbook.author.bio && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              {cookbook.author.bio}
            </Typography>
          )}
        </Box>
      );
    }
    return <Typography>Author information not available</Typography>;
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Example 4: Using the CookbookAuthorInfo component */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Using the CookbookAuthorInfo Component:
        </Typography>
        <CookbookAuthorInfo
          author={cookbook.author}
          showEmail={true}
          showAboutMe={true}
        />
      </Box>

      {/* Example 5: Custom rendering */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Custom Author Display:
        </Typography>
        {renderAuthorInfo()}
      </Box>

      {/* Example 6: Getting just the author name */}
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Simple Author Name:
        </Typography>
        <Typography>Created by: {getAuthorName(cookbook.author)}</Typography>
      </Box>
    </Box>
  );
};

/**
 * AVAILABLE AUTHOR FIELDS (when populated):
 *
 * - author.firstName: string
 * - author.lastName: string
 * - author.email: string
 * - author.avatar?: string (optional)
 * - author.aboutMe?: string (optional)
 *
 * HELPER FUNCTIONS:
 *
 * - isAuthorPopulated(author): Type guard to check if author object is populated
 * - getAuthorName(author): Returns full name or 'Unknown Author'
 *
 * COMPONENTS:
 *
 * - <CookbookAuthorInfo author={cookbook.author} showEmail={true} showAboutMe={true} />
 */
