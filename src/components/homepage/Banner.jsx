import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

import backImg from '../../assets/images/mainBG.jpeg';
import backText from '../../assets/images/mainbanner.png';
import COLOR from '../../assets/styles/colors';

export default function Banner() {
  const navigate = useNavigate();

  return (
    <Box>
      <Box sx={backGorundImage}>
        <Box
          sx={{
            width: '25rem',
            height: '7rem',
          }}
        >
          <img
            src={backText}
            alt="mainTextLogo"
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
        <Typography variant="h4">
          Programmable IPC Performance & Sign
        </Typography>
        <Box>
          <Typography variant="h6">
            컴퓨터 성능진단을 구간가속부터 한계가속까지 원하는 대로
          </Typography>
          <Typography variant="h6">
            설치 없이 사용 가능한 컴퓨터 벤치마크 도구
          </Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{
            width: '15rem',
            height: '4rem',
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: COLOR.white,
            borderRadius: '1.7rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderWidth: '3px',
            '&:hover': {
              backgroundColor: COLOR.blue,
              color: COLOR.white,
            },
          }}
          onClick={() => navigate('/download')}
        >
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
