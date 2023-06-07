import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import DownloadHeader from '../components/downloadpage/DownloadHeader';
import DownloadBody from '../components/downloadpage/DownloadBody';

export default function DownloadPage() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount((prev) => prev - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [count]);

  useEffect(() => {
    if (count === 0) {
      downloadFile();
    }
  }, [count]);

  const downloadFile = () => {
    const fileName = 'textTextFile.txt';
    const fileUrl = require('../assets/test_download.txt');

    const blob = new Blob([fileUrl], { type: 'text/plain' });

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', fileName);
    link.click();

    window.URL.revokeObjectURL(link.href);
  };

  return (
    <Box
      sx={{
        maxWidth: '1280px',
        margin: '0 auto',
        paddingTop: '2rem',
      }}
    >
      <DownloadHeader />
      <DownloadBody count={count} />
    </Box>
  );
}
