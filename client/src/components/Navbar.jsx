import { Link, useLocation } from 'wouter';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/authApiSlice';
import { logout } from '../slices/authSlice';

function Navbar() {
  const { userInfo } = useSelector((state) => state.auth);

  const [, setLocation] = useLocation();

  const [logoutApiCall] = useLogoutMutation();

  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      setLocation('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className='flex justify-center h-16 items-center bg-slate-600'>
      <nav className='flex flex-row justify-between items-center w-full mx-6 text-white'>
        <h1 className='text-2xl font-medium'>
          <Link to='/'>MERN Auth</Link>
        </h1>
        <ul className='flex flex-row gap-4 items-center'>
          {userInfo ? (
            <>
              <li className='py-2 px-3 bg-slate-400 rounded-md'>
                <Link to='/profile'>Profile</Link>
              </li>
              <li className='py-2 px-3 bg-slate-400 rounded-md'>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className='py-2 px-3 bg-slate-400 rounded-md'>
                <Link to='/login'>Login</Link>
              </li>
              <li className='py-2 px-3 bg-slate-400 rounded-md'>
                <Link to='/register'>Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
