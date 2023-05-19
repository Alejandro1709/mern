import { useRef } from 'react';
import { register } from '../services/auth';

function RegisterPage() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !passwordRef.current.value
    )
      return;

    const user = await register(
      nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    );

    console.log(user);
  };

  return (
    <form
      className='flex flex-col gap-2 border p-4 border-slate-400 bg-white'
      onSubmit={handleRegister}
    >
      <div className='flex flex-col gap-1.5'>
        <label htmlFor='name'>Name:</label>
        <input
          name='name'
          id='name'
          className='p-2 border'
          type='text'
          placeholder='John Doe'
          ref={nameRef}
        />
      </div>
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
        Register
      </button>
    </form>
  );
}

export default RegisterPage;
