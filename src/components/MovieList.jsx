import React from "react";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  if(!Array.isArray(movies)){
    return <p>we couldn't upload movies</p>
  }
  return (
    <div>
      <ul className={css.movielist}>
        {movies.map((movie) => {
          return <li key={movie.id}>{movie.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default MovieList;
