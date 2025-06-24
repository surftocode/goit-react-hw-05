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
const MovieCast = lazy(() => import("./components/MovieCast"));
const MovieReviews = lazy(() => import("./components/MovieReviews"));
const App = () => {
  const { movie, isLoading, setMovie, setChange, setIsLoading } = useData();
  const handleSearch = async (query) => {
    try {
      const movieResults = await fetchMovies(query);
      setMovie(movieResults);
    } catch (err) {
      console.log("hata mesajı:", err);
    } finally {
      setIsLoading(false);
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
            <Suspense fallback={<div>Loading..</div>}>
              <HomePage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <Suspense fallback={<div>Loading..</div>}>
              <MoviesPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/movieList/:movieId"
          element={
            <Suspense fallback={<div>Loading..</div>}>
              <MovieDetailsPage />
            </Suspense>
          }
        >
          <Route
            path="/movieList/:movieId/cast"
            element={
              <Suspense fallback={<div>Loading..</div>}>
                <MovieCast />
              </Suspense>
            }
          ></Route>
          <Route
            path="/movieList/:movieId/reviews"
            element={
              <Suspense fallback={<div>Loading..</div>}>
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
