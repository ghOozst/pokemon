import { Outlet } from 'react-router-dom';
import Header from '../components/Header.component';
import Footer from '../components/Footer.component';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="p-3">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
