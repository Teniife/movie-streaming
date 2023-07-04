
const Login = () => {
  return (
    <div className='flex flex-col gap-6 w-full h-fit p-20 text-[0.825rem] mb-20 shadow-lg rounded-md'>
      <h1 className='text-2xl text-center font-semibold mb-8'>Sign in to your account</h1>
      <form
        action=''
        className='flex flex-col justify-center items-center gap-2'
      >
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor=''>Email</label>
          <input id='email' type='email' placeholder='name@company.com' />
          <button className='p-2 w-full text-slate-600 border-slate-200 hover:bg-slate-50 border rounded-md font-semibold'>Continue with email</button>
        </div>
        <p className='text-sm text-slate-500'>or</p>
        <button className='py-2 bg-slate-800 hover:bg-slate-900 text-white w-full rounded-md flex justify-center items-center gap-2 text-center font-semibold'>
          <svg fill='currentColor' viewBox='0 0 16 16' height='1em' width='1em'>
            <path d='M15.545 6.558a9.42 9.42 0 01.139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 118 0a7.689 7.689 0 015.352 2.082l-2.284 2.284A4.347 4.347 0 008 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 000 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 001.599-2.431H8v-3.08h7.545z' />
          </svg>
          {"  "}
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default Login;