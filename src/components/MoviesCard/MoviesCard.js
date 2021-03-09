import React from 'react';
import './MoviesCard.css';
import {Route} from "react-router-dom";
import {imageCheck, convertMinutesToHours} from '../../helper/cardFunctions';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function MoviesCard({card, createFilm, savedMovies }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isLiked, setIsLiked] = React.useState(false);

  const handleClick = () => {
    const imageLink = imageCheck(card.image);
    if(!isLiked) {
    createFilm ({...card, image: imageLink});
    setIsLiked(true);
    }
    else {
      setIsLiked(false);
    }
  }

  React.useEffect(() => {
    if(savedMovies.length > 0) {
      if(!isLiked) {
      setIsLiked(savedMovies.some(savedMovie=>
        savedMovie.movieId === card.id && savedMovie.owner === currentUser._id));}
      else {
        setIsLiked(false);
      }
    }
  },[]);

  return (
    <li className='card'>
      <a href={card.trailerLink || card.trailer} target='_blank'>
        <Route path='/saved-movies'>
          <img className='card__photo' src={card.image} alt={card.nameRU}/>
        </Route>
        <Route path='/movies'>
          <img className='card__photo' src={imageCheck(card.image)} alt={card.nameRU}/>
        </Route>
      </a>
      <div  className='card__container'>
        <h3  className='card__title'>{card.nameRU}</h3>

        <Route path='/movies'>
          <button className={`card__button card__button_type_like ${isLiked && 'card__liked'}`} onClick={handleClick}/>
        </Route>
        <Route path='/saved-movies'>
          <button className={`card__button card__button_type_remove`}/>
        </Route>

      </div>
      <p  className='card__duration'>{convertMinutesToHours(card.duration)}</p>
    </li>
  );
}

export default MoviesCard;
