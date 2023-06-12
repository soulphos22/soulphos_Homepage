import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import COLOR from '../../assets/styles/colors';

export default function FaqLink() {
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        sx={{
          maxWidth: '1280px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
          padding: '5rem 1rem',
          gap: '1rem',
        }}
      >
        <Typography variant="p" sx={{ fontSize: '1.7rem' }}>
          문제가 발생했거나 궁금한 점이 있으신가요?
        </Typography>
        <Typography variant="p" sx={{ fontWeight: 'lighter' }}>
          예기치 않은 문제가 발생했거나 다른 궁금한 점이 있으시면 “자주 묻는
          질문” 페이지를 방문해 내용을 확인해주세요.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            width: '15rem',
            height: '4rem',
            fontSize: '1.2rem',
            marginTop: '1rem',
            '&:hover': {
              backgroundColor: COLOR.blue,
              color: COLOR.white,
            },
          }}
          onClick={() => navigate('/faq')}
        >
          자주 묻는 질문 바로가기
        </Button>
      </Box>
    </Box>
  );
}
