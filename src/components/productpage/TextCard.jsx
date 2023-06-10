import { useState } from 'react';
import { Box, Card, CardMedia, Typography } from '@mui/material';

import COLOR from '../../assets/styles/colors';

export default function TextCard({ prodcutObj }) {
  const {
    imageText,
    hoverText,
    hoverSubText,
    hoverSubText2,
    hoverSubText3,
    image,
  } = prodcutObj;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <Card sx={{ boxShadow: 0, border: `1px solid ${COLOR.borderColor}` }}>
      <Box
        sx={{
          position: 'relative',
          '&:hover': {
            backgroundColor: COLOR.blue,
            '& img': {
              opacity: 0.5,
            },
          },
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <CardMedia
          sx={{
            height: '250px',
            paddingTop: '2%',
            transition: 'all 0.3s ease',
          }}
          component="img"
          image={image}
          alt={imageText}
        />
        {!isHovered ? (
          <Box
            sx={{
              position: 'absolute',
              color: COLOR.black,
              top: '50%',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Typography>
              <span
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: 'rgba(0,0,0,.2)',
                }}
              >
                광고 프로그램 제거
              </span>
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              color: COLOR.white,
              top: '1.5rem',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{ fontSize: '1.5rem', fontWeight: 600, mb: 2, mt: 1 }}
            >
              {hoverText}
            </Typography>
            <Typography sx={HoverSubTextStyle}>{hoverSubText}</Typography>
            <Typography sx={HoverSubTextStyle}>{hoverSubText2}</Typography>
            <Typography sx={HoverSubTextStyle}>{hoverSubText3}</Typography>
          </Box>
        )}
      </Box>
    </Card>
  );
}

const HoverSubTextStyle = {
  fontSize: '1.175rem',
  fontWeight: 400,
  mt: 1,
};
