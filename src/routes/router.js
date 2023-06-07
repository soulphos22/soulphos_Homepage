import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProductPage from '../pages/ProductPage';
import DownloadPage from '../pages/DownloadPage';
import FaqPage from '../pages/FaqPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />}></Route>
      <Route path="about" element={<AboutPage />}></Route>
      <Route path="product" element={<ProductPage />}></Route>
      <Route path="download" element={<DownloadPage />}></Route>
      <Route path="faq" element={<FaqPage />}></Route>
    </Route>,
  ),
);

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default router;
