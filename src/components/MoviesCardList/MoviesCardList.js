import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, generalClass, filteredMovies, moviesIndexShown }) {

  return (
    <ul className={`movies-list ${generalClass}__list`}>
      {
      filteredMovies.reduce((result, card, i) => {
        if (i < moviesIndexShown) {
          result.push(<MoviesCard
            key          = {card.id}
            card         = {card}/>);
        }
        return result;
      }, [])
      }
    </ul>
);
}

export default MoviesCardList;
