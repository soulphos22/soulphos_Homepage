import { Box, Typography } from '@mui/material';

import COLOR from '../assets/styles/colors';

export default function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderTop: `1px solid ${COLOR.borderColor}`,
        padding: '1.6rem',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#53535D',
        color: COLOR.white,
        fontSize: '0.8rem',
        gap: '0.5rem',
      }}
    >
      <Typography variant="p" sx={{ fontWeight: '600', fontSize: '1rem' }}>
        (주) 솔포스
      </Typography>
      <Typography variant="p">MAIL: TestEmail@gmail.com</Typography>
      <Typography variant="p">
        COPYRIGHT ⓒ SOULPHOS COMPANY. ALL RIGHTS RESERVED.
      </Typography>
    </Box>
  );
}
