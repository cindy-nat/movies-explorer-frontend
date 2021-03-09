import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import {Route} from "react-router-dom";

function MoviesCardList({ savedMovies, generalClass, filteredMovies, moviesIndexShown, createFilm }) {

  return (
    <ul className={`movies-list ${generalClass}__list`}>
      <Route path='/saved-movies'>
      {savedMovies.length > 0 &&
      savedMovies.map(movie => { console.log(movie);
        return (<MoviesCard key = {movie._id}
                                            card = {movie}
                                            savedMovies = {savedMovies}/>)})
      }
      </Route>

      <Route path='/movies'>
      {filteredMovies &&
      filteredMovies.reduce((result, card, i) => {
        if (i < moviesIndexShown) {
          result.push(<MoviesCard
            key          = {card.id}
            card         = {card}
            createFilm = {createFilm}
            savedMovies = {savedMovies}
            />);
        }
        return result;
      }, [])
      }
      </Route>

    </ul>
);
}

export default MoviesCardList;
