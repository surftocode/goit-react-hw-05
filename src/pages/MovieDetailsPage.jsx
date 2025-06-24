import React from "react";
import { useContext, useEffect, lazy, Suspense } from "react";
import { useData } from "../DataContext";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import axios from "axios";


const APIKey= "0f552bbb3a7946c71382d336324ac39a";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movie, setMovie, isLoading, setIsLoading, error } =
    useData();
  console.log(movieId);

  // const selectedMovie = movie.find((m) => m.movieId= Number(movieId;
  // console.log(selectedMovie);
  // if(!selectedMovie){
  //   return <p>Loading movies...</p>
  // }
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKey}`
          
        );
        setMovie(res.data);
      } catch (error) {
        // setError("Failed fetch movie details");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (isLoading) {
    return <h2>Please wait...</h2>;
  }
  if (error) {
  
    // return <h5>{error}: hata oluştu.</h5>;
  }

  if (!movie) {
    return <h4>Movie cannot find!</h4>;
  }

  return (
    <div>
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <h1>{movie.title}</h1>
        <p>User score:{Math.round(movie.vote_average * 10)}%</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        {movie.genres && (
          <p>{movie.genres.map((genre) => genre.name).join(",")}</p>
        )}

        <h3>Additional İnformation</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
