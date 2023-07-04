const fetchCarouselMoviesData = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await response.json();
    setCarouselMoviesData(data.results);
  } catch (error) {
    console.error("Error fetching carousel data:", error);
  }
};


module.exports = {
  fetchCarouselMoviesData,
}