import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div style={{display : "flex", paddingBottom : '30px',textAlign : "center", justifyContent :"center", marginTop : '30px'}}>
        <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={handleChange}
        style={{ display: 'flex', textAlign : 'center'}} />
        </Stack>
    </div>
  );
}
