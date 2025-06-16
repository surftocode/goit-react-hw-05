import React from "react";
import css from "./Head.module.css";

const Head = ({onSearch,onClick}) => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    const form =e.target;
    const search=form.elements.searchMovies.value;
    if(search.trim()===""){
      onClick();
      return;
    }
    onSearch(search)

    form.reset();

  };
  return (
    <div>
      
      <form onSubmit={handleSubmit} className={css.formElements}>
        <input
          type="text"
          name="searchMovies"
          placeholder="Search movies"
          autoComplete="off"
          className={css.searchBar}
        />
        <button type="submit" className={css.searchBtn}>
          Find
        </button>
      </form>
    </div>
  );
};

export default Head;
