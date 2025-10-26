import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// ---------- Props Interface ----------
interface PaginationNavProps {
  page: number;
  setPage: (value: number) => void;
  count: number;
}

// ---------- Component ----------
const PaginationNav: React.FC<PaginationNavProps> = ({ page, setPage, count }) => {
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 2,
      }}
    >
      <Stack spacing={2}>
        {/* Mobile version */}
        <Pagination
          count={count}
          defaultPage={Math.ceil(count / 2)}
          siblingCount={0}
          onChange={handleChange}
          sx={{ display: { xs: 'block', sm: 'none' } }}
          showFirstButton
          showLastButton
        />

        {/* Desktop version */}
        <Pagination
          count={count}
          page={page}
          onChange={handleChange}
          sx={{ display: { xs: 'none', sm: 'block' } }}
          showFirstButton
          showLastButton
        />
      </Stack>
    </Box>
  );
};

export default PaginationNav;
