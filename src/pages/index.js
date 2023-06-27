"use client";

import Image from "next/image";
import React, { useEffect } from "react";

const Home = () => {
  const tempMovie = {
    title: "John Wick: Chapter 4",
    overview:
      "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wic…",
    imageUrl:
      "https://image.tmdb.org/t/p/original/1inZm0xxXrpRfN0LxwE2TXzyLN6.jpg",
    releaseDate: "2023-03-22",
    rating: 7.8,
    genre: ["Action", "Crime"],
  };

  // const [carouselMoviesData, setCarouselMoviesData] = useState([]);

  useEffect(() => {
    // Fetch carousel movies data from an tmdb API
  }, []);

  return (
    <div>
      <div className='relative' key={tempMovie.id}>
        <div className='h-[650px] w-full relative'>
          <Image
            src={tempMovie.imageUrl}
            alt='Your Image'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent' />
        <div className='absolute inset-0 flex flex-col justify-center w-full md:w-[575px] mx-5 md:mx-40 gap-8'>
          <h1 className='text-white text-5xl font-bold'>{tempMovie.title}</h1>
          <p>{tempMovie.overview}</p>
          <button className='px-4 py-2 bg-red-700 hover:bg-red-800 max-w-fit rounded-md'>WATCH NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
