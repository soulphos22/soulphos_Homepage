import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

import backImg from '../../assets/images/backimg.png';

export default function Banner() {
  const navigate = useNavigate();

  return (
    <Box>
      <Box sx={backGorundImage}>
        <Typography variant="h1">P I P S</Typography>
        <Typography variant="h4">
          Programmable IPC Performance & Sign
        </Typography>
        <Box>
          <Typography variant="h6">
            간단한 소개 문구가 들어가는 자리 첫번째 줄
          </Typography>
          <Typography variant="h6">
            간단한 소개 문구가 들어가는 자리 두번째 줄
          </Typography>
        </Box>
        <Button variant="contained" onClick={() => navigate('/download')}>
          다운로드 페이지 이동
        </Button>
      </Box>
    </Box>
  );
}

const backGorundImage = {
  width: '100%',
  height: '100%',
  minHeight: 'calc(92vh - 60px)',
  position: 'abolute',
  top: 0,
  left: 0,
  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${backImg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  zIndex: -1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  textAlign: 'center',
  gap: '1.5rem',
};
