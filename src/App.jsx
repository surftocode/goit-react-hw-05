import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useParams } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import clsx from "clsx";
import React from "react";
import axios from "axios";
import MovieList from "./components/MovieList";
import Head from "./components/Head";
import {fetchMovies} from "./components/FilmAPI"


const App = () => {
  const [movie,setMovie]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
 
    const handleSearch =async (query)=>{
      try{
        const movieResults=await fetchMovies(query);
        setMovie(movieResults);
      }catch(err){
        console.log("hata mesajı:", err)
      }
    };
  


 
  const onSearch =async (searchMov)=>{
    try{
      setIsLoading(true);
      const data=await fetchMovies(searchMov);
      setMovie(data);
      
    }catch(err){
      console.log(err)
    }finally{
      setIsLoading(false);

    }
  };
  if (isLoading){
    return <h2>Please Wait..</h2>
  }

  const warning=()=>{
    alert("Please search a movie 🕵")

  }

  
  
  return (
    <div>
      <Head onSearch={onSearch} onClick={warning} />
      <h2>Trending today</h2>
      <MovieList movies={movie} />
      {/*  <Routes>
            <Route path="" element={}></Route>
            <Route path="*" element={<NotFound />}/>
        </Routes> */}
    </div>
  );
};

export default App;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);