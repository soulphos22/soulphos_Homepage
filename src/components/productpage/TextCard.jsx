import { useState } from 'react';
import { Box, Card, CardMedia, Typography } from '@mui/material';

import backRemoveImage from '../../assets/images/backimg_removebg.png';
import COLOR from '../../assets/styles/colors';

export default function TextCard() {
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
          image={backRemoveImage}
          alt="testImage"
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
              광고 프로그램 제거
            </Typography>
            <Typography sx={{ fontSize: '1.175rem', fontWeight: 400, mt: 1 }}>
              사용자의 의도와는 관계 없이 무분별한 방식으로
            </Typography>
            <Typography sx={{ fontSize: '1.175rem', fontWeight: 400, mt: 1 }}>
              광고 창을 띄우는 툴바를 포함한 악의적인 광고
            </Typography>
            <Typography sx={{ fontSize: '1.175rem', fontWeight: 400, mt: 1 }}>
              프로그램을 효과적으로 제거합니다.
            </Typography>
          </Box>
        )}
      </Box>
    </Card>
  );
}
