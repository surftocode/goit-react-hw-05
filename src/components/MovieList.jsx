import React from "react";
import css from "./MovieList.module.css";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  if (!Array.isArray(movies)) {
    return <p>we couldn't upload movies</p>;
  }
  console.log(movies);
  return (
    <div>
      <ul className={css.movielist}>
        {movies.map((movie,index) => {
          return (
            <li key={index}>
              <Link to={`/movieList/${movie.id}`}>
                <div>
                  <h2>{movie.title}</h2>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
