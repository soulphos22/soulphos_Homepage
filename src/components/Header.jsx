import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import iconLogo from '../assets/images/logo.png';
import COLOR from '../assets/styles/colors';

export default function Header() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const navigate = useNavigate();

  const subMenuItems = [
    {
      name: '기업 소개',
      link: '/about',
    },
    {
      name: '제품 소개',
      link: '/product',
    },
  ];

  const menuItems = [
    {
      name: '소개',
      link: '/about',
      items: () => {
        return (
          <ul
            style={{
              position: 'absolute',
              top: '1.6rem',
              right: '5.7rem',
              textAlign: 'center',
              backgroundColor: COLOR.white,
              borderRadius: '0.5rem',
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem',
              width: '10rem',
            }}
          >
            {subMenuItems.map((item) => (
              <Box key={item.name}>
                <li style={menuListStyle}>
                  <Link to={item.link} style={textStyle}>
                    <Typography variant="p" sx={textSemiBold}>
                      {item.name}
                    </Typography>
                  </Link>
                </li>
              </Box>
            ))}
          </ul>
        );
      },
    },
    {
      name: '지원',
      link: '/',
    },
  ];

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <Box sx={headerContainer}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5rem',
          marginLeft: '1rem',
        }}
      >
        <Link to="/" alt="home">
          <img src={iconLogo} alt="logo" />
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        {menuItems.map((item) => (
          <Box
            key={item.name}
            onMouseOver={item.name === '소개' ? handleMouseOver : null}
            onMouseLeave={item.name === '소개' ? handleMouseLeave : null}
          >
            <Link to={item.link} style={textStyle}>
              <Typography variant="p" sx={textSemiBold}>
                {item.name}
              </Typography>
            </Link>
            {item.items && isMouseOver && item.items()}
          </Box>
        ))}
        <Button
          variant="outlined"
          sx={{ marginRight: '1rem' }}
          onClick={() => navigate('/download')}
        >
          다운로드
        </Button>
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
  zIndex: 100,
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

const menuListStyle = {
  listStyle: 'none',
  marginTop: '1.25rem',
  marginBottom: '.9375rem',
  padding: '.375rem 1.25rem .375rem 1.25rem',
};
