import { Box, Typography } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import downspinner from '../../assets/videos/downspinner.gif';

export default function DownloadBody({ count }) {
  return (
    <Box
      sx={{
        width: '50%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        paddingTop: '3rem',
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: '500' }}>
        {count > 0
          ? `${count}초뒤에 자동으로 다운로드가 완료 됩니다.`
          : '다운로드가 완료되었습니다 이용해주셔서 감사합니다.'}
      </Typography>
      {count > 0 ? (
        <img src={downspinner} alt="downspinner" width="20%" />
      ) : (
        <CheckBoxIcon sx={{ fontSize: '5rem', color: '#4caf50' }} />
      )}
      <Typography variant="p" sx={{ fontWeight: 'lighter' }}>
        악성 항목이 제거되지 않을 경우 악성코드 분석 요청 페이지를 참고해주세요.
      </Typography>
      <Typography variant="p" sx={{ fontWeight: 'lighter' }}>
        브라우저 보안 설정에 의해 파일 내려받기가 차단될 경우 자주 묻는 질문
        내용을 참고해주세요.
      </Typography>
    </Box>
  );
}
