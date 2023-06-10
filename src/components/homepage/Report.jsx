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
        <Typography variant="h4">제보 및 신고</Typography>
        <Typography variant="p" sx={{ fontWeight: 'lighter' }}>
          신종 및 변종 또는 제거되지 않는 악성코드가 존재하거나 사용 중 버그
          또는 오진이 발생하면 아래 전자우편주소를 통해 바로 알려주세요.
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
              href="mailto:test123@gmail.com"
              style={{ textDecoration: 'none' }}
            >
              TestEmail123@gmail.com
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
