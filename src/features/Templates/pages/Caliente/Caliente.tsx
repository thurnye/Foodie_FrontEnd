import React from 'react';
import { Box } from '@mui/material';
import { Page01_Cover } from './Page01_Cover';
import { Page02_03_WelcomeHistory } from './Page02_03_WelcomeHistory';
import { Page04_05_TastySpicy } from './Page04_05_TastySpicy';
import { Page06_07_CookingTeam } from './Page06_07_CookingTeam';
import { Page08_09_GriddMeat } from './Page08_09_GriddMeat';
import { Page10_11_ProfatoDumpling } from './Page10_11_ProfatoDumpling';
import { Page12_13_CreamSoup } from './Page12_13_CreamSoup';
import { Page14_15_FeaturedBackCover } from './Page14_15_FeaturedBackCover';

export default function Caliente() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        padding: '40px',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      {/* Page 01 - Cover */}
      <Box
        sx={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          backgroundColor: '#fff',
        }}
      >
        <Page01_Cover />
      </Box>

      {/* Pages 02-03 - Welcome & History */}
      <Box
        sx={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          backgroundColor: '#fff',
        }}
      >
        <Page02_03_WelcomeHistory />
      </Box>

      {/* Pages 04-05 - Tasty and Spicy */}
      <Box
        sx={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          backgroundColor: '#fff',
        }}
      >
        <Page04_05_TastySpicy />
      </Box>

      {/* Pages 06-07 - Cooking Team */}
      <Box
        sx={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          backgroundColor: '#fff',
        }}
      >
        <Page06_07_CookingTeam />
      </Box>

      {/* Pages 08-09 - Gridd Meat */}
      <Box
        sx={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          backgroundColor: '#fff',
        }}
      >
        <Page08_09_GriddMeat />
      </Box>

      {/* Pages 10-11 - Profato Dumpling */}
      <Box
        sx={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          backgroundColor: '#fff',
        }}
      >
        <Page10_11_ProfatoDumpling />
      </Box>

      {/* Pages 12-13 - Cream Soup */}
      <Box
        sx={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          backgroundColor: '#fff',
        }}
      >
        <Page12_13_CreamSoup />
      </Box>

      {/* Pages 14-15 - Featured Dishes & Back Cover */}
      <Box
        sx={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          backgroundColor: '#fff',
        }}
      >
        <Page14_15_FeaturedBackCover />
      </Box>
    </Box>
  );
}
