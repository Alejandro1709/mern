import { Link } from 'wouter';

function Navbar() {
  return (
    <header className='flex justify-center h-16 items-center bg-slate-600'>
      <nav className='flex flex-row justify-between items-center w-full mx-6 text-white'>
        <h1 className='text-2xl font-medium'>
          <Link to='/'>MERN Auth</Link>
        </h1>
        <ul className='flex flex-row gap-4 items-center'>
          <li className='py-2 px-3 bg-slate-400 rounded-md'>
            <Link to='/login'>Login</Link>
          </li>
          <li className='py-2 px-3 bg-slate-400 rounded-md'>
            <Link to='/register'>Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;