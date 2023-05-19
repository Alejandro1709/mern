function RegisterPage() {
  return (
    <form className='flex flex-col gap-2 border p-4 border-slate-400 bg-white'>
      <div className='flex flex-col gap-1.5'>
        <label htmlFor='name'>Name:</label>
        <input
          name='name'
          id='name'
          className='p-2 border'
          type='text'
          placeholder='John Doe'
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
        />
      </div>
      <button className='bg-slate-600 p-2 mt-2 text-white font-medium cursor-pointer hover:bg-slate-700'>
        Register
      </button>
    </form>
  );
}

export default RegisterPage;
