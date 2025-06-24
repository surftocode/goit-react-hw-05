import React from "react";
import { lazy, Suspense } from "react";
// import MovieList from "../components/MovieList";
import { useData } from "../DataContext";
import axios from "axios";
import Head from "../components/Head";

const MoviesPage = () => {
  const MovieList = lazy(() => import("../components/MovieList"));
  const APIKey = "0f552bbb3a7946c71382d336324ac39a";
  const {
    movie,
    setMovie,
    setError,
    isLoading,
    setIsLoading,
    search,
    setSearch,
  } = useData();

  const handleSearch = async () => {
    if (!search.trim()) return;
    setIsLoading(true);

    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: APIKey,
            query: search,
          },
        }
      );
      setMovie(data.results);
    } catch (error) {
      console.log("Hata Mesajı", error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (e) => {
    setSearch(e);
  };

  console.log(movie);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
     
        <Head
        searchValue={search}
        onClick={handleSearch}
        onChange={handleChange}
      />
     
      <Suspense fallback={<div>Loading..</div>}>
        <MovieList movies={movie} />
      </Suspense>
      
      
    </div>
  );
};

export default MoviesPage;
