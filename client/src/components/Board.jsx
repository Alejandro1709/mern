function Board() {
  return (
    <article className='flex flex-col gap-4 border p-4 border-slate-400 rounded-lg'>
      <header className='flex flex-col gap-1.5 justify-center items-center'>
        <h1 className='text-3xl font-medium'>Welcome to MERN Auth!</h1>
        <p className='text-center lg:max-w-lg'>
          This is jus a working demo of a MERN APP where you can login/register
          and edit your profile
        </p>
      </header>
      <ul className='flex flex-row gap-4 justify-center items-center'>
        <li className='py-2 px-3 bg-slate-400 rounded-md'>Login</li>
        <li className='py-2 px-3 bg-slate-400 rounded-md'>Register</li>
      </ul>
    </article>
  );
}

export default Board;

// <article className='flex flex-col gap-4 border p-4 border-slate-400 rounded-lg'>
//   <header className='flex flex-col gap-1.5 justify-center items-center'>
//     <h1 className='text-3xl font-medium'>Welcome Alejandro!</h1>
//     <p className='text-center lg:max-w-lg'>
//       This is jus a working demo of a MERN APP where you can login/register and
//       edit your profile
//     </p>
//   </header>
//   <ul className='flex flex-row gap-4 justify-center items-center'>
//     <li className='py-2 px-3 bg-slate-400 rounded-md'>Edit</li>
//     <li className='py-2 px-3 bg-slate-400 rounded-md'>Delete</li>
//     <li className='py-2 px-3 bg-slate-400 rounded-md'>Logout</li>
//   </ul>
// </article>;
