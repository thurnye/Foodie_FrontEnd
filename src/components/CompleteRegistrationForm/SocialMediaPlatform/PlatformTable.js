import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import LaunchIcon from '@mui/icons-material/Launch';
import { getRandomInt } from '../../../util/commons';


export default function PlatformTable({ data }) {
  return (
    <>
      <Box>
        {data.map((platform) => 
        <Box sx={{
          display: 'flex',
        }} key={getRandomInt()}>
          <Typography variant="body2" sx={{mr: 3, width: 150}}>{platform.name}</Typography>
          <Typography variant="body2" sx={{flexGrow: 1}}>
            <Link href={platform.link} target="_blank"><LaunchIcon sx={{fontSize: 18}}/></Link>
          </Typography>
        </Box>)}
      </Box>
    </>
  );
}
