import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderTop: '1px solid #eee',
        padding: '1rem',
      }}
    >
      <Typography variant="p">(주) 솔포스</Typography>
      <Typography variant="p">MAIL: TestEmail@gmail.com</Typography>
      <Typography variant="p">
        COPYRIGHT ⓒ SOULPHOS COMPANY. ALL RIGHTS RESERVED.
      </Typography>
    </Box>
  );
}
