import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import COLOR from '../../assets/styles/colors';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '&.Mui-expanded': {
    backgroundColor: COLOR.blue,
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  display: 'flex',
  flexDirection: 'column',
}));

export default function FaqItem({
  panelId,
  question,
  answer,
  image,
  expanded,
  onChange,
}) {
  return (
    <Accordion expanded={expanded === panelId} onChange={onChange(panelId)}>
      <AccordionSummary>
        <Typography variant="p" sx={{ fontSize: '1.3rem' }}>
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="p" sx={{ fontSize: '1rem' }}>
          {answer}
        </Typography>
        {image && (
          <img
            src={image}
            alt="qnaImage"
            style={{
              width: '50%',
              height: '50%',
              marginTop: '1rem',
              borderRadius: '0.5rem',
            }}
          />
        )}
      </AccordionDetails>
    </Accordion>
  );
}
