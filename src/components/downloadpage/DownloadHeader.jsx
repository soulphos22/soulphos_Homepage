import { Box, Typography } from '@mui/material';

import COLOR from '../../assets/styles/colors';

export default function DownloadHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${COLOR.borderColor}`,
        paddingBottom: '2rem',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: '500' }}>
        무료 내려받기
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'end',
          gap: '0.5rem',
          fontWeight: 'lighter',
        }}
      >
        <Typography variant="p">
          솔포스의 무료 프로그램을 내려받으세요.
        </Typography>
        <Typography variant="p">
          각종 시설, 기관, 학교, 기업, 가정, 군부대, 청와대, 우주, 멀티버스
          등에서 비용 없이 사용 가능합니다.
        </Typography>
      </Box>
    </Box>
  );
}
