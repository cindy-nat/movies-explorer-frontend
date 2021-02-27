import React from 'react';
import './Movies.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import picture from '../../images/pic__COLOR_pic.png'

function Movies() {
  const activeMovie = true;

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
      "nameRU": "33 слова о дизайне",
      "duration": '1ч 42м',
      "image": picture
    },
    // {
    //   "nameRU": "33 слова о дизайне",
    //   "duration": '1ч 42м',
    //   "image": picture
    // },
    // {
    //   "nameRU": "33 слова о дизайне",
    //   "duration": '1ч 42м',
    //   "image": picture
    // },
    // {
    //   "nameRU": "33 слова о дизайне",
    //   "duration": '1ч 42м',
    //   "image": picture
    // },
    // {
    //   "nameRU": "33 слова о дизайне",
    //   "duration": '1ч 42м',
    //   "image": picture
    // },
    // {
    //   "nameRU": "33 слова о дизайне",
    //   "duration": '1ч 42м',
    //   "image": picture
    // },
    // {
    //   "nameRU": "33 слова о дизайне",
    //   "duration": '1ч 42м',
    //   "image": picture
    // },
    // {
    //   "nameRU": "33 слова о дизайне",
    //   "duration": '1ч 42м',
    //   "image": picture
    // },
    // {
    //   "nameRU": "33 слова о дизайне",
    //   "duration": '1ч 42м',
    //   "image": picture
    // },
  ]
  return (
    <>
      <Header activeMovie = {activeMovie}/>
      <section className='movies'>
        <SearchForm/>
        <MoviesCardList movies={movies} buttonClass='movies' moviesRoute={true}/>
      </section>
      <Footer/>
    </>
  );
}

export default Movies;
