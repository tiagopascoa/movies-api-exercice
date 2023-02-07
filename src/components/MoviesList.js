import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ moviesData }) => {
  return (
    <div className="movies-list">
      {moviesData.map((movie) => (
        <div className="card-container">
          <MovieCard key={movie.id} movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
