import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import iconLogo from '../assets/images/soulphoslogo.jpg';
import COLOR from '../assets/styles/colors';

export default function Header() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const navigate = useNavigate();

  const subMenuItems = [
    {
      name: '제품 소개',
      link: '/product',
    },
    {
      name: '기업 소개',
      link: '/about',
    },
  ];

  const menuItems = [
    {
      name: '소개',
      link: '/product',
      items: () => {
        return (
          <ul style={subMenuStyle}>
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
      link: '/faq',
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
          <img
            src={iconLogo}
            alt="logo"
            style={{
              width: '6rem',
              height: '4rem',
              padding: '0.5rem 0.5rem 0rem 0.5rem',
            }}
          />
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        {menuItems.map((item) => (
          <Box
            key={item.name}
            sx={{
              width: '3em',
              height: '4.75em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseOver={item.name === '소개' ? handleMouseOver : null}
            onMouseLeave={item.name === '소개' ? handleMouseLeave : null}
          >
            <Box>
              <Link to={item.link} style={textStyle}>
                <Typography variant="p" sx={textSemiBold}>
                  {item.name}
                </Typography>
              </Link>
              {item.items && isMouseOver && item.items()}
            </Box>
          </Box>
        ))}
        <Button
          variant="outlined"
          sx={{
            marginRight: '1rem',
            '&:hover': {
              backgroundColor: COLOR.blue,
              color: COLOR.white,
            },
          }}
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
  borderBottom: `1px solid ${COLOR.borderColor}`,
  zIndex: 100,
};

const subMenuStyle = {
  position: 'absolute',
  top: '3.8rem',
  right: '5.7rem',
  textAlign: 'center',
  backgroundColor: COLOR.white,
  borderTop: `1px solid ${COLOR.borderColor}`,
  borderRadius: '0 0 0.5rem 0.5rem',
  paddingLeft: '0.5rem',
  paddingRight: '0.5rem',
  width: '10rem',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};

const textStyle = {
  textDecoration: 'none',
  color: COLOR.black,
};

const textSemiBold = {
  fontWeight: '500',
  fontSize: '1.1rem',
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
