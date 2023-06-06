import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />}></Route>
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
