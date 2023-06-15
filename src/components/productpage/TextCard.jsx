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
            ...(hoverText !== '' && {
              backgroundColor: COLOR.blue,
              '& img': {
                opacity: 0.5,
              },
            }),
          },
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Box sx={{ width: '375px', height: '250px' }}>
          <CardMedia
            sx={{
              paddingTop: '2%',
              transition: 'all 0.3s ease',
              objectFit: 'contain',
            }}
            height={250}
            component="img"
            image={image}
            alt={imageText}
          />
        </Box>
        {isHovered && (
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
