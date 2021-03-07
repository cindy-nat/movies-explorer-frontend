import React from 'react';
import './MoviesCard.css';
import {Route} from "react-router-dom";
import {imageCheck, convertMinutesToHours} from '../../helper/cardFunctions';

function MoviesCard({card}) {

  // нужно для измения цвета лайка
  const [isLiked, setIsLiked] = React.useState(false);
  const changeLikeColor = () => {if (isLiked === false) {
    setIsLiked(true);
  } else {
    setIsLiked(false);
  }}

  return (
    <li className='card'>
      <a href={card.trailerLink} target='_blank'>
        <img className='card__photo' src={imageCheck(card.image)} alt={card.nameRU}/>
      </a>
      <div  className='card__container'>
        <h3  className='card__title'>{card.nameRU}</h3>

        <Route path='/movies'>
          <button className={`card__button card__button_type_like ${isLiked && 'card__liked'}`} onClick={changeLikeColor}/>
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
