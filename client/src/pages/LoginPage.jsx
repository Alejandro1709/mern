import { useRef } from 'react';
import { login } from '../services/auth';

function LoginPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!emailRef.current.value || !passwordRef.current.value) return;

    const user = await login(emailRef.current.value, passwordRef.current.value);

    console.log(user);
  };

  return (
    <form
      className='flex flex-col gap-2 border p-4 border-slate-400 bg-white'
      onSubmit={handleLogin}
    >
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
      <button className='bg-slate-600 p-2 mt-2 text-white font-medium cursor-pointer hover:bg-slate-700'>
        Login
      </button>
    </form>
  );
}

export default LoginPage;
