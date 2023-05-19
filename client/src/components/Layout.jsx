import Navbar from './Navbar';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <>
      <div className='flex flex-col bg-slate-100 min-h-screen'>
        <Navbar />
        <main className='flex-1'>{children}</main>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
