import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const [page, setPage] = React.useState(currentPage);
  const handleChange = (event, value) => {
    setPage(value);
    onPageChange(page);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        sx={{ '& .Mui-selected': { backgroundColor: '#ffc107!important' } }}
      />
    </Stack>
  );
}
