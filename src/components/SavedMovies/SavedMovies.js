import React from 'react';
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({ savedMovies, deleteFilm }) {
  return (
    <>
      <section className='saved-movies'>
        <SearchForm/>

        { savedMovies.length === 0 &&
        <p className='saved-movies__text'>Фильмы не найдены</p>}

        { savedMovies.length !== 0 &&
        <MoviesCardList savedMovies={savedMovies}
                        generalClass='saved-movies'
                        deleteFilm = {deleteFilm}
        />
        }
      </section>
      <Footer/>
    </>
  );
}

export default SavedMovies;
