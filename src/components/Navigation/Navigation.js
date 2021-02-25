import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";


function Navigation({ activeMovie, activeSavedMovie, isMenuOpen }) {

  return (
    <nav className='pages-navigation'>
      <ul className='pages-navigation__list'>
        {isMenuOpen &&<li className='pages-navigation__list-item'>
          <Link className={ `pages-navigation__link` } to='/'>
            Главная</Link>
        </li> }
        <li className='pages-navigation__list-item'>
          <Link className={`pages-navigation__link ${activeMovie && 'pages-navigation__link_active'}` } to='/movies'>
            Фильмы</Link>
        </li>
        <li className='pages-navigation__list-item'>
          <Link className={`pages-navigation__link ${activeSavedMovie && 'pages-navigation__link_active'}` } to='/saved-movies'>
            Сохраненные фильмы</Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navigation;
