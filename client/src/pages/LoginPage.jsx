import { useRef, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/authApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

function LoginPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [, setLocation] = useLocation();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      setLocation('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      toast.error('Please provide a valid email and/or password');
    }

    try {
      const res = await login({ email, password }).unwrap();

      dispatch(setCredentials({ ...res }));
      setLocation('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <form
      className='flex flex-col gap-2 border p-4 border-slate-400 bg-white'
      onSubmit={handleLogin}
    >
      {isLoading ? (
        <span className='bg-blue-400 p-2 text-white rounded-lg'>
          Loading...
        </span>
      ) : null}
      <div className='flex flex-col gap-1.5'>
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          name='email'
          className='p-2 border'
          type='text'
          placeholder='johndoe@example.com'
          ref={emailRef}
        />
      </div>
      <div className='flex flex-col gap-1.5'>
        <label htmlFor='password'>Password:</label>
        <input
          className='p-2 border'
          id='password'
          name='password'
          type='password'
          placeholder='********'
          ref={passwordRef}
        />
      </div>
      <button
        disabled={isLoading}
        className='bg-slate-600 p-2 mt-2 text-white font-medium disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer hover:bg-slate-700'
      >
        Login
      </button>
    </form>
  );
}

export default LoginPage;
