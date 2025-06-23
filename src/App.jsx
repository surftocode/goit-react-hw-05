import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useParams } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import React from "react";
import css from "./App.module.css";


import NotFoundPage from "./pages/NotFoundPage";

import { fetchMovies } from "./components/FilmAPI";
import { useData } from "./DataContext";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const MovieCast = lazy(() => import("../components/MovieCast"));
const MovieReviews = lazy(() => import("../components/MovieReviews"));
const App = () => {
  const { movie, isLoading, setMovie, setChange } = useData();
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

      <Routes>
        <Route
          index
          element={
            <Suspense fallback={"Loading.."}>
              <HomePage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <Suspense fallback={"Loading..."}>
              <MoviesPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/movieList/:id"
          element={
            <Suspense fallback={"Loading..."}>
              <MovieDetailsPage />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense>
                <MovieCast />
              </Suspense>
            }
          ></Route>
          <Route
            path="reviews"
            element={
              <Suspense>
                <MovieReviews />
              </Suspense>
            }
          ></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
