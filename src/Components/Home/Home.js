import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import "./Home.css"; 
import FavList from "../FavList /FavList ";

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    sendReq();
  }, []);

  const sendReq = async () => {
    const serverURL =
      "https://api.themoviedb.org/3/trending/all/week?api_key=18976591dc16bc5a0867e48d4ff172ec";
    const res = await fetch(serverURL);
    const jsonRes = await res.json();
    setTrendingMovies(jsonRes.results);

  };

  return (
    <>
    <div className="home-container">
      <h2 className="home-title">All Trending Movies</h2>
      <div className="movie-list-container">
        <MovieList jsonRes={trendingMovies} />
      </div>
    </div>
    </>
  );
}

export default Home;


