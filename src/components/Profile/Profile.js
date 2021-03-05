import React from 'react';
import './Profile.css';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";


function Profile({ handleSignOut }) {

  const currentUser = React.useContext(CurrentUserContext);


  return (
      <section className='profile'>
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <form className='profile__form' name='edit-form'></form>
        <label className='profile__form-label'>Имя
          <input className='profile__form-input' type='text' value={currentUser.name}></input>
        </label>
        <label className='profile__form-label'>Почта
          <input className='profile__form-input' type='email' value={currentUser.email}></input>
        </label>
        <button type='submit' className='profile__submit-button'>Редактировать</button>
        <button className='profile__exit-button' onClick={handleSignOut}>Выйти из аккаунта</button>
      </section>
  );
}

export default Profile;
