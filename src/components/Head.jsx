import React from "react";
import css from "./Head.module.css";
import { Outlet } from "react-router-dom";

const Head = ({ onChange, onClick, searchValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClick();
  };

  console.log("onchange", typeof onChange);
  console.log("onClick", typeof onClick);
  console.log("searchValue", typeof searchValue);
  return (
    <div>
      <form onSubmit={handleSubmit} className={css.formElements}>
        <input
          type="text"
          name="searchMovies"
          placeholder="Search a movie..."
          value={searchValue}
          autoComplete="off"
          className={css.searchBar}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        <p>You typed: {searchValue}</p>
        <button type="submit" className={css.searchBtn}>
          Find
        </button>
      </form>
      <Outlet />
    </div>
  );
};

export default Head;
