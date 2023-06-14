import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const isAuthtenticated = false;
  return (
    <nav className='w-full flex justify-between items-center px-5 py-4 bg-[#0a0a0a]'>
      <div>

        <Link href="/" className='text-3xl font-semibold bg-gradient-to-r gradient from-white via-red-600 to-[#B70404] block text-transparent bg-clip-text'>
          Movie
          <span className=''>Hub</span>
        </Link>
      </div>
      <div className='flex items-center gap-4 font-semibold nav-links'>
        <div className='hidden md:flex gap-4'>
          <Link href='/home' className='hover:border-b-white'>Home</Link>
          <Link href='/movies' className='hover:border-b-white'>Movies</Link>
          <Link href='/search' className='hover:border-b-white'>Search</Link>
        </div>

        {isAuthtenticated ? (
          <>
            <Link href='/favorites' className='hover:border-b-white'>Favorites</Link>
            <Link href='/logout' onClick={""}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              href='/signin'
              className='bg-red-600 hover:bg-red-700 text-white rounded-md px-3 py-1'
            >
              Log in
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
