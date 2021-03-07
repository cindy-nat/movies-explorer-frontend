import React from 'react';
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {useFormWithValidation} from "../../Hooks/useFormWithValidation";

function SearchForm({setFilteredMovies}) {
  const formData = useFormWithValidation();
  const {search} = formData.values;
  const {handleChange, errors, isValid, isFocused, onFocus} = formData;


  const handleSubmit = (event) => {
    event.preventDefault();

  }

  return (
    <form className='search-form' noValidate onSubmit={handleSubmit}>
      <div className='search-form__container'>
        <input name='search'
               required
               className='search-form__input'
               placeholder='Фильм'
               onChange={handleChange}
               onBlur={onFocus}
        />
        <button disabled={Object.keys(errors).length !== 0} className='search-form__submit-button'/>
      </div>
      <span className="search-form__input-error">{isFocused && errors.search}</span>
      <FilterCheckbox/>
    </form>
  );
}

export default SearchForm;
