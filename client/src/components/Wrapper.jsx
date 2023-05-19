import PropTypes from 'prop-types';

function Wrapper({ children }) {
  return (
    <section className='m-6 xl:max-w-screen-xl xl:mx-auto md:max-w-screen-md md:mx-auto lg:max-w-screen-lg lg:mx-auto'>
      {children}
    </section>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
