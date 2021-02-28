import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, generalClass }) {


  return (
    <>
    <ul className={`movies-list ${generalClass}__list`}>
      {
        movies.map((card)=> (<MoviesCard card = {card}/>
          )
        )
      }
    </ul>
  <button type='button' className={`additional-button ${generalClass}__button`}>Ещё</button>
    </>
);
}

export default MoviesCardList;
