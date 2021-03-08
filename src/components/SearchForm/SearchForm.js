import React from 'react';
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {useFormWithValidation} from "../../Hooks/useFormWithValidation";

function SearchForm({setFilteredMovies, movies, setIsFilteredMovies, setIsCheckBoxClicked, isCheckBoxClicked, setShortFilteredMovies}) {
  const formData = useFormWithValidation();
  const {search} = formData.values;
  const {handleChange, errors, isFocused, onFocus} = formData;


  const handleSubmit = (event) => {
    event.preventDefault();
    let filteredMovies = movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(search.toLowerCase())
    });
    setFilteredMovies(filteredMovies);
    setIsFilteredMovies(true);
    if(filteredMovies.length !== 0) {
      localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    }
    else {
      localStorage.clear();
    }
  }

  return (
    <form className='search-form' noValidate onSubmit={handleSubmit}>
      <div className='search-form__container'>
        <input name='search'
               required
               className='search-form__input'
               placeholder='Фильм'
               onChange={handleChange}
               value={search || ''}
               onFocus={onFocus}
        />
        <button disabled={Object.keys(errors).length !== 0} className='search-form__submit-button'/>
      </div>
      <span className="search-form__input-error">{isFocused && errors.search}</span>
      <FilterCheckbox setIsCheckBoxClicked ={setIsCheckBoxClicked} isCheckBoxClicked = {isCheckBoxClicked}/>
    </form>
  );
}

export default SearchForm;
