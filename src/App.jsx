import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useParams } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import clsx from "clsx";
import React from "react";

import MovieList from "./components/MovieList";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage";
import MoviDetailsPage from "./pages/MovieDetailsPage";
import Head from "./components/Head";
import { fetchMovies } from "./components/FilmAPI";
import { useData } from "./DataContext";

const App = () => {
  const {movie,isLoading}=useData();
  // const [movie, setMovie] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
 
  // const handleSearch = async (query) => {
  //   try {
  //     const movieResults = await fetchMovies(query);
  //     setMovie(movieResults);
  //   } catch (err) {
  //     console.log("hata mesajı:", err);
  //   }
  // };

  // if (isLoading) {
  //   return <h2>Please Wait..</h2>;
  // }

  // const warning = () => {
  //   alert("Please search a movie 🕵");
  // };

  return (
    <div>
     
      <MovieList movies={movie} />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movieList" element={<MovieList />}></Route>
        <Route path="/movieDetails" element={<MoviDetailsPage />}></Route>
        <Route path="/moviePage" element={<MoviesPage />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;


