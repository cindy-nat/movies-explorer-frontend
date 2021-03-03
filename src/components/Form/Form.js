import React from 'react';
import './Form.css';
import {Link, Route} from "react-router-dom";



function Form({ formName, submitButton, formText, link, linkText, formData, onSubmit, isRegisteredError }) {
  const {values, handleChange, errors, isValid, isClicked, onBlur} = formData

  return (
    <>
      <form className='form' name={`${formName}-form`} noValidate onSubmit={onSubmit}>
      <div className='form__input-container'>
        <Route path='/signup'>
          <label htmlFor='name' className='form__label'> Имя</label>
          <input type='text'
                 className={`form__input ${errors.name && 'form__input_error'}`}
                 name='name'
                 required
                 minLength='2'
                 maxLength='30'
                 onChange={handleChange}
                 onBlur={onBlur}
                 value={values.name || ''}/>
          <span className="form__error">{isClicked && errors.name}</span>
        </Route>

        <label htmlFor='email' className='form__label'> E-mail</label>
        <input type='email'
               className={`form__input ${errors.email && 'form__input_error'}`}
               name='email'
               required
               onChange={handleChange}
               onBlur={onBlur}
               value={values.email || ''}/>
        <span className="form__error">{isClicked && errors.email}</span>

        <label htmlFor='password' className='form__label'>Пароль</label>
        <input type='password'
               className={`form__input ${errors.password && 'form__input_error'}`}
               name='password'
               required
               onChange={handleChange}
               onBlur={onBlur}
               value={values.password || ''}
        />
        <span className="form__error">{isClicked && errors.password}</span>
      </div>
      <div className='form__input-container'>
        {isRegisteredError && <p className='form__text-error'>Произошла ошибка при регистрации</p>}
        <button disabled={!isValid} type='submit' className='form__button'>{submitButton}</button>
        <p className="form__text">{formText}<Link to={`/${link}`} className="form__link">{linkText}</Link></p>
      </div>
      </form>
    </>

);
}

export default Form;
