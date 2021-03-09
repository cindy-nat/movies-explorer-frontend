import React from 'react';
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { CARDS_QUANTITY_MAX,
        ADDITIONAL_CARDS_QUANTITY_MAX,
        WINDOW_WIDTH_MAX,
        ADDITIONAL_CARDS_QUANTITY_MIDDLE,
        CARDS_QUANTITY_MIDDLE,
        WINDOW_WIDTH_MIDDLE,
        CARDS_QUANTITY_SMALL,
        ADDITIONAL_CARDS_QUANTITY_SMALL} from '../../helper/MoviesConstants';

function Movies({movies, isLoading, createFilm, savedMovies}) {
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [allFilteredMovies, setAllFilteredMovies] = React.useState([]);
  const [shortFilteredMovies, setShortFilteredMovies] = React.useState([]);
  const [isCheckBoxClicked, setIsCheckBoxClicked] = React.useState(false);
  const [isFilteredMovies, setIsFilteredMovies] = React.useState(false);
  const [moviesIndexShown, setMoviesIndexShown] = React.useState(0);
  const [cardQuantity, setCardQuantity] = React.useState(0);
  const [additionalCardQuantity, setAdditionalCardQuantity] = React.useState(0);

  React.useEffect(()=> {
    if(isCheckBoxClicked && filteredMovies) {
      setFilteredMovies (
        allFilteredMovies.reduce((result, movieInfo) => {
        if(movieInfo.duration <= 40) {
          result.push(movieInfo)
        }
       return result;
      },[]));
      setShortFilteredMovies(filteredMovies);
    } else {
      setFilteredMovies(allFilteredMovies);
    }
  }, [isCheckBoxClicked, allFilteredMovies])

  window.addEventListener("resize", resizeThrottler, false);
  let resizeTimeout;
  function resizeThrottler() {
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function setTime() {
        resizeTimeout = null;
        actualResizeHandler();
      }, 1000);
    }
  }

  function actualResizeHandler() {
    if(window.innerWidth >= WINDOW_WIDTH_MAX) {
      if(filteredMovies.length < CARDS_QUANTITY_MAX) {
        setCardQuantity(filteredMovies.length);
        setMoviesIndexShown(filteredMovies.length);
      } else {
      setCardQuantity(CARDS_QUANTITY_MAX);
      setMoviesIndexShown(CARDS_QUANTITY_MAX);
      setAdditionalCardQuantity(ADDITIONAL_CARDS_QUANTITY_MAX)
      }
    }

    else if (window.innerWidth >= WINDOW_WIDTH_MIDDLE && window.innerWidth < WINDOW_WIDTH_MAX){
      if(filteredMovies.length < CARDS_QUANTITY_MIDDLE) {
        setCardQuantity(filteredMovies.length);
        setMoviesIndexShown(filteredMovies.length)
      } else {
      setCardQuantity(CARDS_QUANTITY_MIDDLE);
        setMoviesIndexShown(CARDS_QUANTITY_MIDDLE);
        setAdditionalCardQuantity(ADDITIONAL_CARDS_QUANTITY_MIDDLE)
      }
    }

    else if (window.innerWidth<WINDOW_WIDTH_MIDDLE){
      if(filteredMovies.length < CARDS_QUANTITY_SMALL) {
        setCardQuantity(filteredMovies.length);
        setMoviesIndexShown(filteredMovies.length)
      } else {
      setCardQuantity(CARDS_QUANTITY_SMALL);
      setMoviesIndexShown(CARDS_QUANTITY_SMALL);
      setAdditionalCardQuantity(ADDITIONAL_CARDS_QUANTITY_SMALL);
      }
    }
  }

  React.useEffect(() => {
    actualResizeHandler();
  }, [allFilteredMovies, filteredMovies]);

  React.useEffect(()=> {
    let savedData = localStorage.getItem('filteredMovies');
    if(savedData) {
      setAllFilteredMovies(JSON.parse(savedData));
      setIsFilteredMovies(true);
    }
  }, []);

  const handleAddCards = () => {
  if(moviesIndexShown<=filteredMovies.length) {
    if(moviesIndexShown + additionalCardQuantity > filteredMovies.length) {
      setMoviesIndexShown(filteredMovies.length);
    }
    else{
    setMoviesIndexShown(moviesIndexShown+additionalCardQuantity);
    }
  }
  }

  return (
    <>
      <section className='movies'>
        <SearchForm setFilteredMovies ={setAllFilteredMovies}
                    setShortFilteredMovies = {setShortFilteredMovies}
                    movies = {movies}
                    setIsFilteredMovies = {setIsFilteredMovies}
                    setIsCheckBoxClicked = {setIsCheckBoxClicked}
                    isCheckBoxClicked = {isCheckBoxClicked}
                    />

        {isLoading && <Preloader/>}

        {(isFilteredMovies && filteredMovies.length === 0) &&
        <p className='movies__text'>Фильмы не найдены</p>
        }

        {isFilteredMovies && !isLoading &&
        <MoviesCardList filteredMovies={filteredMovies}
                        generalClass='movies'
                        cardQuantity = {cardQuantity}
                        moviesIndexShown = {moviesIndexShown}
                        createFilm = {createFilm}
                        savedMovies = {savedMovies}
                        />}
        {(moviesIndexShown !== filteredMovies.length) &&
          <button type='button' className='movies__additional-button' onClick={handleAddCards}>Ещё</button>}
      </section>
      <Footer/>
    </>
  );
}

export default Movies;
