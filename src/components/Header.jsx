import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import iconLogo from '../assets/images/logo.png';
import COLOR from '../assets/styles/colors';

export default function Header() {
  return (
    <Box sx={headerContainer}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <Link to="/">
          <img src={iconLogo} alt="logo" />
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <Link to="/" style={textStyle}>
          <Typography variant="p" sx={textSemiBold}>
            소개
          </Typography>
        </Link>
        <Link to="/" style={textStyle}>
          <Typography variant="p" sx={textSemiBold}>
            지원
          </Typography>
        </Link>
        <Button variant="outlined">다운로드</Button>
      </Box>
    </Box>
  );
}

const headerContainer = {
  width: '100%',
  height: '100%',
  position: 'sticky',
  top: 0,
  backgroundColor: COLOR.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #eee',
};

const textStyle = {
  textDecoration: 'none',
  color: COLOR.black,
};

const textSemiBold = {
  fontWeight: '600',
  '&:hover': {
    color: COLOR.blue,
  },
};
