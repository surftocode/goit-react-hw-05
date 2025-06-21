import React from "react";
import { useContext } from "react";
import { useData } from "../DataContext";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { movie } = useData();
  console.log(id);

  const selectedMovie = movie.find((m) => m.id == id);
  console.log(selectedMovie);

  return (
    <div>
      <div>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} />
        </div>
        <div>
          <h3>{selectedMovie.title}</h3>
          <p>User score:{selectedMovie.vote_average}</p>
          <h4>Overview</h4>
          <p>{selectedMovie.overview}</p>
          <h4>Genres</h4>
          <p>{selectedMovie.genre_ids[id]}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
