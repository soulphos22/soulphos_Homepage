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
    const fileName = 'download.zip';
    const fileUrl = require('../assets/test.zip');

    fetch(fileUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to download file');
        }
        return response.blob();
      })
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = fileName;
        a.click();

        window.URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box
      sx={{
        maxWidth: '1280px',
        margin: '0 auto',
        paddingTop: '3rem',
      }}
    >
      <DownloadHeader />
      <DownloadBody count={count} />
    </Box>
  );
}
