import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, buttonClass, moviesRoute }) {


  return (
    <>
    <ul className={`movies-list ${buttonClass}__list`}>
      {
        movies.map((card)=> (<MoviesCard card = {card}
                                         moviesRoute={moviesRoute}/>
          )
        )
      }
    </ul>
  <button type='button' className={`additional-button ${buttonClass}__button`}>Ещё</button>
    </>
);
}

export default MoviesCardList;
