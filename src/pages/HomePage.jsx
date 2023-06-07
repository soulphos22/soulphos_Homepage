import { Box } from '@mui/material';
import { itemObj } from '../utils/itemObj';

import Banner from '../components/homepage/Banner';
import ItemList from '../components/homepage/ItemList';
import FaqLink from '../components/homepage/FaqLink';
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
      <FaqLink />
      <Report />
    </Box>
  );
}
