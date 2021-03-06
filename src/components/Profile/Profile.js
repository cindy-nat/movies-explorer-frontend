import React from 'react';
import './Profile.css';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useFormWithValidation} from "../../Hooks/useFormWithValidation";


function Profile({ handleSignOut, changeProfileInfo, isEditError, isEditSuccess }) {
    const currentUser = React.useContext(CurrentUserContext);
  const formWithValidation = useFormWithValidation();
  const {email, name} = formWithValidation.values;

  React.useEffect(()=> {
    formWithValidation.setValues({ 'email': currentUser.email, 'name': currentUser.name });
      },[]);

  const submitHandle = (event) => {
    event.preventDefault();
    changeProfileInfo(name,email);
  }

  return (
      <section className='profile'>
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <form className='profile__form' name='edit-form' noValidate onSubmit={submitHandle}>
          <label className='profile__form-label'>Имя
            <input required
                   minLength='2'
                   maxLength='30'
                   name='name'
                   className='profile__form-input'
                   type='text'
                   value={name || ''}
                   onChange={formWithValidation.handleChange}/>
          </label>
          <label className='profile__form-label'>Почта
            <input required
                   name='email'
                   className='profile__form-input'
                   type='email'
                   value={email || ''}
                   onChange={formWithValidation.handleChange}/>
          </label>
          <p className='profile__form-error'>{formWithValidation.errors.name||formWithValidation.errors.email}</p>
          {isEditError && <p className='profile__form-error'>Ошибка обновления данных</p>}
          {isEditSuccess && <p className='profile__form-success'>Данные успешно обновлены</p>}
          <button disabled={(name === currentUser.name && email === currentUser.email) || !formWithValidation.isValid} type='submit' className='profile__submit-button'>Редактировать</button>
        </form>
        <button className='profile__exit-button' onClick={handleSignOut}>Выйти из аккаунта</button>
      </section>
  );
}

export default Profile;
