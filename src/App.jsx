import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useParams } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import clsx from "clsx";
import React from "react";
import css from "./App.module.css";

import MovieList from "./components/MovieList";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage";
import MoviDetailsPage from "./pages/MovieDetailsPage";
import Head from "./components/Head";
import { fetchMovies } from "./components/FilmAPI";
import { useData } from "./DataContext";

const App = () => {
  const { movie, isLoading, setMovie,setChange } = useData();
  const handleSearch = async (query) => {
    try {
      const movieResults = await fetchMovies(query);
      setMovie(movieResults);
    } catch (err) {
      console.log("hata mesajı:", err);
    }
  };
  if (isLoading) {
    return <h2>Please Wait..</h2>;
  }

  const warning = () => {
    alert("Please search a movie 🕵");
  };
 

  return (
    <div>
      <nav>
        <ul className={css.navbar}>
          <li className={css.navbarİtem}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={css.navbarİtem}>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      {/* <Head onSearch={handleSearch} onClick={warning} onChange={handleChange}/> */}

      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/movieList" element={<Navigate><MoviesPage /></Navigate>}></Route>
        <Route path="/movieList/:id" element={<MoviDetailsPage />}></Route>

        {/* <Route path="/movieList/:id/reviews" element={<MovieReviews/>}></Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
