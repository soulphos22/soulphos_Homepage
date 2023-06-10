import { Box, Typography, useMediaQuery } from '@mui/material';

import COLOR from '../../assets/styles/colors';

export default function ItemList({ textObj }) {
  const { mainText, subText, subText2, subText3, image } = textObj;
  const isSmallSize = useMediaQuery('(max-width:950px)');

  return (
    <Box
      sx={
        !isSmallSize
          ? itemListContainer
          : {
              ...itemListContainer,
              flexDirection: 'column-reverse',
              gap: '1rem',
            }
      }
    >
      <Box
        sx={
          !isSmallSize
            ? itemListTextBox
            : { ...itemListTextBox, width: '100%', textAlign: 'center' }
        }
      >
        <Typography
          variant="p"
          sx={
            !isSmallSize
              ? itemListTextStyle
              : { ...itemListTextStyle, fontSize: '1.5rem' }
          }
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
          style={
            !isSmallSize
              ? itemListImageStyle
              : { ...itemListImageStyle, maxWidth: '300px', maxHeight: '300px' }
          }
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

const itemListContainer = {
  maxWidth: '1280px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto',
  padding: '1.5rem 1rem',
};

const itemListTextBox = {
  width: '75%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '0.7rem',
};

const itemListTextStyle = {
  fontSize: '2.3rem',
  color: COLOR.blue,
  marginBottom: '0.7rem',
};

const itemListImageStyle = {
  width: '100%',
  height: 'auto',
  maxWidth: '400px',
  maxHeight: '400px',
};
