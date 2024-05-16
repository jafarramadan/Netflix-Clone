import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import "./Home.css"; 

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    sendReq();
  }, []);

  const sendReq = async () => {
   // https://movies-library-6vpj.onrender.com/trending
   const serverURL = `https://movies-library-6vpj.onrender.com/trending`;
    const res = await fetch(serverURL);
    const jsonRes = await res.json();
    setTrendingMovies(jsonRes);
  };

  return (
    <div className="home-container">
      <h2 className="home-title">All Trending Movies</h2>
      <div className="movie-list-container">
        <MovieList jsonRes={trendingMovies} />
      </div>
    </div>
  );
}

export default Home;
