import React from "react";
import { ReactComponent as Star } from "../assets/Star.svg";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        style={{ borderRadius: "12px", width: "100%", height: "362px" }}
      />
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p className="card-description">
          {movie.original_language} | {movie.release_date}
        </p>
      </div>
      <div className="classification-container">
        <span className="classification">{movie.vote_average}/10</span>
        <Star />
      </div>
    </div>
  );
};

export default MovieCard;
