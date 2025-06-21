import React from "react";
import { useData } from "../DataContext";
import Head from "../components/Head";
import { fetchMovies } from "../components/FilmAPI";

const HomePage = () => {
  return (
    <div>
      <h2>Trending today</h2>
    </div>
  );
};

export default HomePage;
