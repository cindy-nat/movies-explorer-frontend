import React from 'react';
import './SavedMovies.css';
import picture from "../../images/pic__COLOR_pic.png";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies() {
  // Данные с фильмами, которые будут получены после фильтрации
  const movies = [{
    "nameRU": "33 слова о дизайне",
    "duration": '1ч 42м',
    "image": picture
  },
    {
      "nameRU": "33 слова о дизайне",
      "duration": '1ч 42м',
      "image": picture
    },
    {
      "nameRU": "33 слова о дизайне",
      "duration": '1ч 42м',
      "image": picture
    },
    {
      "nameRU": "Дженис: Маленькая девочка грустит",
      "duration": '1ч 42м',
      "image": picture
    },
    {
      "nameRU": "33 слова о дизайне",
      "duration": '1ч 42м',
      "image": picture
    },
  ]
  return (
    <>
      <Header/>
      <section className='saved-movies'>
        <SearchForm/>
        {/*<Preloader/>*/}
        {/*<p className='saved-movies__text'>Фильмы не найдены</p>*/}
        <MoviesCardList movies={movies} generalClass='saved-movies'/>
      </section>
      <Footer/>
    </>
  );
}

export default SavedMovies;
