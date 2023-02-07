import React, { useState } from "react";
import MoviesList from "../components/MoviesList";
import Pagination from "../components/Pagination";

const MoviesPage = ({ movies, query }) => {
  console.log("movies: ", movies);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(8);
  const [sortDir, setSortDir] = useState("");

  //Pagination
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  //Sorting movies by name in ascending or descending order
  if (sortDir === "ascending") {
    currentMovies.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  } else if (sortDir === "hightolow") {
    currentMovies.sort((a, b) => {
      if (a.title < b.title) {
        return 1;
      }
      if (a.title > b.title) {
        return -1;
      }
      return 0;
    });
  }

  return (
    <section className="page-section">
      <div className="movies-page-container">
        <div className="filter-container">
          <div className="filter-results">
            <span className="first-results">Results for '{query}'</span>
            <span className="second-results">
              We found {movies.length} results for '{query}'
            </span>
          </div>
          <div className="filter-sort">
            <select onChange={(e) => setSortDir(e.target.value)} className="select-sort">
              <option value="" disabled>Sort by Name: </option>
              <option value="ascending">Ascending</option>
              <option value="hightolow">Descending</option>
            </select>
          </div>
        </div>
        <MoviesList moviesData={currentMovies} />
        <Pagination
          totalMovies={movies.length}
          moviesPerPage={moviesPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default MoviesPage;
