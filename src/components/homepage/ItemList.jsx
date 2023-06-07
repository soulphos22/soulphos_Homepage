import { Box, Typography } from '@mui/material';

import COLOR from '../../assets/styles/colors';

export default function ItemList({ textObj }) {
  const { mainText, subText, subText2, subText3, image } = textObj;

  return (
    <Box
      sx={{
        maxWidth: '1280px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        padding: '1.5rem 1rem',
        '@media (max-width: 950px)': {
          flexDirection: 'column-reverse',
          gap: '1rem',
        },
      }}
    >
      <Box
        sx={{
          width: '75%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1rem',
          '@media (max-width: 950px)': {
            width: '100%',
            textAlign: 'center',
          },
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: '2.3rem',
            color: COLOR.blue,
            '@media (max-width: 950px)': {
              fontSize: '1.5rem',
            },
          }}
        >
          {mainText}
        </Typography>
        <Typography variant="p" sx={descFont}>
          {subText}
        </Typography>
        <Typography variant="p" sx={descFont}>
          {subText2}
        </Typography>
        <Typography variant="p" sx={descFont}>
          {subText3}
        </Typography>
      </Box>
      <Box>
        <img
          src={image}
          alt="test"
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '400px',
            maxHeight: '400px',
            '@media (max-width: 950px)': {
              maxWidth: '300px',
              maxHeight: '300px',
            },
          }}
        />
      </Box>
    </Box>
  );
}

const descFont = {
  fontSize: '1.2rem',
  fontWeight: 'lighter',
  '@media (max-width: 950px)': {
    fontSize: '1rem',
  },
};
