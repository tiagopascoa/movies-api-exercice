import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=37806dd1300837fa217e0539b5252818&language=en-US&query=${query}&page=1&include_adult=false`;

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setMovies(data.results);
      };
      fetchMovies();
    }
  }, [query, url]);

  return (
    <Router>
      <Navbar setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage movies={movies} query={query}/>} />
      </Routes>
    </Router>
  );
}

export default App;
