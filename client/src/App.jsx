function App() {
  return (
    <>
      <div className='flex flex-col bg-slate-100 min-h-screen'>
        <header className='flex justify-center h-16 items-center bg-slate-600'>
          <nav className='flex flex-row justify-between items-center w-full mx-6 text-white'>
            <h1 className='text-2xl font-medium'>MERN Auth</h1>
            <ul className='flex flex-row gap-4 items-center'>
              <li className='py-2 px-3 bg-slate-400 rounded-md'>Login</li>
              <li className='py-2 px-3 bg-slate-400 rounded-md'>Register</li>
            </ul>
          </nav>
        </header>
        <main className='flex-1'>
          <section className='m-6 xl:max-w-screen-xl xl:mx-auto md:max-w-screen-md md:mx-auto lg:max-w-screen-lg lg:mx-auto'>
            <article className='flex flex-col gap-4 border p-4 border-slate-400 rounded-lg'>
              <header className='flex flex-col gap-1.5 justify-center items-center'>
                <h1 className='text-3xl font-medium'>Welcome to MERN Auth!</h1>
                <p className='text-center lg:max-w-lg'>
                  This is jus a working demo of a MERN APP where you can
                  login/register and edit your profile
                </p>
              </header>
              <ul className='flex flex-row gap-4 justify-center items-center'>
                <li className='py-2 px-3 bg-slate-400 rounded-md'>Login</li>
                <li className='py-2 px-3 bg-slate-400 rounded-md'>Register</li>
              </ul>
            </article>
          </section>
          <section className='m-6 xl:max-w-screen-xl xl:mx-auto md:max-w-screen-md md:mx-auto lg:max-w-screen-lg lg:mx-auto'>
            <article className='flex flex-col gap-4 border p-4 border-slate-400 rounded-lg'>
              <header className='flex flex-col gap-1.5 justify-center items-center'>
                <h1 className='text-3xl font-medium'>Welcome Alejandro!</h1>
                <p className='text-center lg:max-w-lg'>
                  This is jus a working demo of a MERN APP where you can
                  login/register and edit your profile
                </p>
              </header>
              <ul className='flex flex-row gap-4 justify-center items-center'>
                <li className='py-2 px-3 bg-slate-400 rounded-md'>Edit</li>
                <li className='py-2 px-3 bg-slate-400 rounded-md'>Delete</li>
                <li className='py-2 px-3 bg-slate-400 rounded-md'>Logout</li>
              </ul>
            </article>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
