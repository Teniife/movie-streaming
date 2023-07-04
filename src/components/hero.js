import Image from 'next/image';
import React from "react";

const Hero = ({ tempMovie }) => {
  return (

    <div className='relative text-white' key={tempMovie.id}>
      <div className='h-[650px] w-full relative'>
        <Image
          src={tempMovie.imageUrl}
          alt='Your Image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent' />
      <div className='absolute inset-0 flex flex-col justify-center w-full md:w-[575px] mx-5 md:mx-40 gap-8 px-8'>
        <h1 className='text-white text-5xl font-bold'>{tempMovie.title}</h1>
        <p>{tempMovie.overview}</p>
        <button className='px-4 py-2 bg-red-700 hover:bg-red-800 max-w-fit rounded-md'>
          WATCH NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;
