import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";


function Navigation({ activeMovie, activeSavedMovie }) {
  return (
    <nav className='pages-navigation'>
      <ul className='pages-navigation__list'>
        <li><Link className={`pages-navigation__link ${activeMovie && 'pages-navigation__link_active'}` } to='/movies'>Фильмы</Link></li>
        <li><Link className={`pages-navigation__link ${activeSavedMovie && 'pages-navigation__link_active'}` } to='/saved-movies'>Сохраненные фильмы</Link></li>
      </ul>

    </nav>
  );
}

export default Navigation;
