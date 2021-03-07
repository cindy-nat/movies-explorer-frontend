import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ movies, generalClass, isLoading }) {

  return (
    <ul className={`movies-list ${generalClass}__list`}>
      {isLoading && <Preloader/>}
      {!isLoading &&
        movies.map((card)=> (<MoviesCard
              key          = {card.id}
              card         = {card}/>
          )
        )
      }
    </ul>
);
}

export default MoviesCardList;
