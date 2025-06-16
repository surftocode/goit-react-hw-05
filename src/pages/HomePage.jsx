import React from "react";
import {useData} from "../DataContext"
import Head from "../components/Head";
import {fetchMovies} from "../components/FilmAPI"

const HomePage = () => {
    const {isLoading,setMovie}= useData();

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
      <Head onSearch={handleSearch} onClick={warning} />
      <h2>Trending today</h2>
    </div>
  );
};

export default HomePage;
