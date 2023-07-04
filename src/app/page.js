"use client";

import Hero from '@/components/hero';
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
      <Hero tempMovie={tempMovie} />
    </div>);
}
export default Home;