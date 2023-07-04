"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const isAuthtenticated = false;
  return (
    <nav className='w-full flex justify-between items-center px-5 py-4 bg-[#0a0a0a] text-sm text-white'>
      <div>
        <Link
          href='/'
          className='text-2xl font-medium bg-gradient-to-r gradient from-white via-red-600 to-[#B70404] block text-transparent bg-clip-text'
        >
          Movie
          <span className=''>Hub</span>
        </Link>
      </div>
      <div className='flex items-center gap-4 text-slate-300'>
        <div className='hidden md:flex gap-6'>
          <Link href='/home' className='hover:text-white'>
            Home
          </Link>
          <Link href='/movies' className='hover:text-white'>
            Movies
          </Link>
          <Link href='/search' className='hover:text-white'>
            Search
          </Link>
        </div>

        {isAuthtenticated ? (
          <>
            <Link href='/favorites' className='hover:border-b-white'>
              Favorites
            </Link>
            <Link href='/logout' onClick={""}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              href='/login'
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
