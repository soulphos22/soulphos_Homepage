import { Box, Typography } from '@mui/material';

export default function Report() {
  return (
    <Box sx={{ backgroundColor: '#fafaff' }}>
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
        <Typography variant="h4">문의사항</Typography>
        <Typography variant="p" sx={{ fontWeight: 'lighter' }}>
          사용 중 버그가 발생하거나 “자주 묻는 질문”에서 해결하지 못한 문제가
          발생하면 아래 전자우편주소를 통해 바로 문의해주세요.
        </Typography>
        <Box
          sx={{
            width: '65%',
            border: '1px solid #000000',
            p: '25px 0px',
            borderRadius: '8px',
            textAlign: 'center',
            '@media (max-width: 950px)': {
              width: '100%',
            },
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'lighter' }}>
            이메일:&nbsp;
            <a
              href="mailto:soulphos22@gmail.com"
              style={{ textDecoration: 'none' }}
            >
              soulphos22@gmail.com
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
