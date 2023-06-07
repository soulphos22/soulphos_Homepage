import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { faqObj } from '../utils/itemObj';

import FaqItem from '../components/faqpage/FaqItem';

export default function FaqPage() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box sx={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem' }}>
      <Box sx={{ marginBottom: '3rem' }}>
        <Typography variant="p" sx={{ fontSize: '2.5rem', fontWeight: '500' }}>
          자주 묻는 질문 FAQ
        </Typography>
      </Box>
      <Box>
        {faqObj.map((item) => (
          <FaqItem
            key={item.panelId}
            panelId={item.panelId}
            question={item.question}
            answer={item.answer}
            image={item.image}
            expanded={expanded}
            onChange={handleChange}
          />
        ))}
      </Box>
    </Box>
  );
}
