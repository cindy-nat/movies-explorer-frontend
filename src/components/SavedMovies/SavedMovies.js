import React from 'react';
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({ savedMovies, deleteFilm }) {
  const [filteredSavedMovies, setFilteredSavedMovies] = React.useState(savedMovies);
  const [filteredSavedAllMovies, setFilteredSavedAllMovies] = React.useState(savedMovies);
  const [shortFilteredSavedMovies, setShortFilteredSavedMovies] = React.useState([]);
  const [isCheckBoxClicked, setIsCheckBoxClicked] = React.useState(false);
  const [isFilteredMovies, setIsFilteredMovies] = React.useState(false);

  // создаем массив с фильтрованными короткометражками
  React.useEffect(() => {
    // ВЫНЕСТИ В ОТДЕЛЬНУЮ ФУНКЦИЮ
    setShortFilteredSavedMovies(filteredSavedMovies.reduce((result, movieInfo) => {
      if(movieInfo.duration <= 40) {
        result.push(movieInfo);
      }
      return result;
    },[]));
  }, [filteredSavedMovies]);

  React.useEffect(()=> {
    if(isCheckBoxClicked && filteredSavedMovies) {
      setFilteredSavedMovies (shortFilteredSavedMovies);
    } else {
      setFilteredSavedMovies(filteredSavedAllMovies);
    }
  }, [isCheckBoxClicked, filteredSavedMovies]);

  const searchHandle = (searchValue) => {
    // можно вынести в отдельную функцию поиска
    let filteredSavedMovies = savedMovies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
    });
    setFilteredSavedMovies(filteredSavedMovies);
    setFilteredSavedAllMovies(filteredSavedMovies);
    setIsFilteredMovies(true);
  }

  return (
    <>
      <section className='saved-movies'>
        <SearchForm searchHandle={searchHandle}
                    setIsCheckBoxClicked = {setIsCheckBoxClicked}
                    isCheckBoxClicked = {isCheckBoxClicked}/>

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
