import React from 'react';
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import {shortMoviesSearchHandle, moviesSearchHandle} from '../../helper/searchFunctions';

function SavedMovies({ savedMovies, deleteFilm }) {
  const [filteredSavedMovies, setFilteredSavedMovies] = React.useState(savedMovies);
  const [filteredSavedAllMovies, setFilteredSavedAllMovies] = React.useState(savedMovies);
  const [shortFilteredSavedMovies, setShortFilteredSavedMovies] = React.useState([]);
  const [isCheckBoxClicked, setIsCheckBoxClicked] = React.useState(false);
  const [isFilteredMovies, setIsFilteredMovies] = React.useState(false);

  // создаем массив с фильтрованными короткометражками
  React.useEffect(() => {
    setShortFilteredSavedMovies(shortMoviesSearchHandle(filteredSavedMovies))
  }, [filteredSavedMovies]);

  React.useEffect(()=> {
    if(isCheckBoxClicked && filteredSavedMovies) {
      setFilteredSavedMovies(shortFilteredSavedMovies);
    } else {
      setFilteredSavedMovies(filteredSavedAllMovies);
    }
  }, [isCheckBoxClicked, filteredSavedMovies]);

  const searchHandle = (searchValue) => {
    const filteredSavedMovies = moviesSearchHandle(savedMovies, searchValue);
    setFilteredSavedMovies(filteredSavedMovies);
    setFilteredSavedAllMovies(filteredSavedMovies);
    setIsFilteredMovies(true);
  }

  const clearSearchHandle = () => {
    setIsFilteredMovies(false);
  }

  return (
    <>
      <section className='saved-movies'>
        <SearchForm searchHandle={searchHandle}
                    setIsCheckBoxClicked = {setIsCheckBoxClicked}
                    isCheckBoxClicked = {isCheckBoxClicked}
                    clearSearchHandle = {clearSearchHandle}/>

        { savedMovies.length === 0 || filteredSavedMovies.length === 0 &&
        <p className='saved-movies__text'>Фильмы не найдены</p>}

        { savedMovies.length !== 0 &&
        <MoviesCardList savedMovies={savedMovies}
                        generalClass='saved-movies'
                        deleteFilm = {deleteFilm}
                        filteredSavedMovies = {filteredSavedMovies}
                        isFilteredMovies = {isFilteredMovies}
        />
        }
      </section>
      <Footer/>
    </>
  );
}

export default SavedMovies;
