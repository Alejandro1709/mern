import Navbar from './Navbar';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout({ children }) {
  return (
    <>
      <div className='flex flex-col bg-slate-100 min-h-screen'>
        <Navbar />
        <ToastContainer />
        <main className='flex-1'>{children}</main>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
