import React from 'react';
import { Box, Card, CardMedia, useTheme } from '@mui/material';

// ---- Types ----
export interface AdItem {
  src: string;
  alt: string;
  href?: string;
}

interface AdGalleryProps {
  ads: AdItem[];
  direction?: 'row' | 'column'; // layout direction
  hoverScale?: number;          // how much the image scales on hover
  spacing?: number;             // gap between ads
}

/**
 * A reusable advertisement gallery component that displays one or more ad images.
 * Supports responsive direction, hover animation, and clickable links.
 */
const AdGallery: React.FC<AdGalleryProps> = ({
  ads,
  direction = 'column',
  hoverScale = 1.02,
  spacing = 2,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: direction,
        gap: spacing,
        my: 1,
        flexWrap: direction === 'row' ? 'wrap' : 'nowrap',
      }}
    >
      {ads.map((ad, index) => (
        <Card
          key={`ad_item_${index}`}
          sx={{
            boxShadow: 'none',
            overflow: 'hidden',
            borderRadius: 2,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: `scale(${hoverScale})`,
              boxShadow: theme.shadows[3],
            },
          }}
        >
          <a
            href={ad.href || '#'}
            target={ad.href ? '_blank' : '_self'}
            rel="noopener noreferrer"
            style={{
              display: 'block',
              width: '100%',
              textDecoration: 'none',
            }}
          >
            <CardMedia
              component="img"
              image={ad.src}
              alt={ad.alt}
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </a>
        </Card>
      ))}
    </Box>
  );
};

export default AdGallery;
