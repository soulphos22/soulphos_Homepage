import { Box } from '@mui/material';
import { itemObj } from '../utils/itemObj';

import Banner from '../components/homepage/Banner';
import ItemList from '../components/homepage/ItemList';
import QnaLink from '../components/homepage/QnaLink';
import Report from '../components/homepage/Report';

export default function HomePage() {
  return (
    <Box>
      <Banner />
      <Box
        sx={{ paddingTop: '5rem', width: '100%', backgroundColor: '#fafaff' }}
      >
        {itemObj.map((item) => (
          <ItemList key={item.id} textObj={item} />
        ))}
      </Box>
      <QnaLink />
      <Report />
    </Box>
  );
}
