import React from 'react';
import './MoviesCard.css';

function MoviesCard(card, {moviesRoute}) {

  // нужно для измения цвета лайка
  const [isLiked, setIsLiked] = React.useState(false);
  const changeLikeColor = () => {if (isLiked === false) {
    setIsLiked(true);
  } else {
    setIsLiked(false);
  }}

  return (
    <div className='card'>
      <img className='card__photo' src={card.card.image} alt={card.card.nameRU}/>
      <div  className='card__container'>
        <h3  className='card__title'>{card.card.nameRU}</h3>
        {moviesRoute && <button className={`card__like ${isLiked && 'card__liked'}`} onClick={changeLikeColor}></button>}
      </div>
      <p  className='card__duration'>{card.card.duration}</p>
    </div>
  );
}

export default MoviesCard;
