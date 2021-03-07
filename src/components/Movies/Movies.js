import React from 'react';
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({movies, isLoading}) {
  const [filteredMovies, setFilteredMovies] = React.useState({});

  return (
    <>
      <section className='movies'>
        <SearchForm setFilteredMovies ={setFilteredMovies}/>
        {/*<p className='movies__text'>Фильмы не найдены</p>*/}
        <MoviesCardList movies={movies} generalClass='movies' isLoading = {isLoading}/>
        <button type='button' className='movies__additional-button'>Ещё</button>
      </section>
      <Footer/>
    </>
  );
}

export default Movies;
