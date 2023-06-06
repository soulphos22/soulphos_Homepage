import { Box, Typography, Button } from '@mui/material';

export default function QnaLink() {
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
        <Typography variant="h4">
          문제가 발생했거나 궁금한 점이 있으신가요?
        </Typography>
        <Typography variant="p" sx={{ fontWeight: 'lighter' }}>
          예기치 않은 문제가 발생했거나 다른 궁금한 점이 있으시면 “자주 묻는
          질문” 페이지를 방문해 내용을 확인해주세요.
        </Typography>
        <Button variant="outlined" sx={{ marginTop: '1rem' }}>
          자주 묻는 질문 바로가기
        </Button>
      </Box>
    </Box>
  );
}
