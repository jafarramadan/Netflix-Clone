import React from 'react';
import { Row } from 'react-bootstrap';
import Movie from '../Movie/Movie';
import './MovieList.css'; 

function MovieList({ jsonRes }) {
  
  return (
    <div className="movie-list-container">
      {jsonRes.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Movie
            id={movie.id}
            title={movie.title || movie.name}
            image={movie.poster_path}
            overview={movie.overview}
            release_date={movie.release_date}
          />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
 

