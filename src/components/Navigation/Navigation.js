import React from 'react';
import './Navigation.css';
import {Link, Route} from "react-router-dom";


function Navigation({ isMenuOpen }) {

  return (
    <nav className='pages-navigation'>
      <ul className='pages-navigation__list'>
        {isMenuOpen &&<li className='pages-navigation__list-item'>
          <Link className={ `pages-navigation__link` } to='/'>
            Главная</Link>
        </li> }
        <Route path={'/movies'}>
        <li className='pages-navigation__list-item'>
          <Link className={`pages-navigation__link pages-navigation__link_active` } to='/movies'>
            Фильмы</Link>
        </li>
        <li className='pages-navigation__list-item'>
          <Link className={`pages-navigation__link` } to='/saved-movies'>
            Сохраненные фильмы</Link>
        </li>
        </Route>

        <Route path={'/saved-movies'}>
        <li className='pages-navigation__list-item'>
          <Link className={`pages-navigation__link`} to='/movies'>
            Фильмы</Link>
        </li>
        <li className='pages-navigation__list-item'>
          <Link className={`pages-navigation__link pages-navigation__link_active` } to='/saved-movies'>
            Сохраненные фильмы</Link>
        </li>
        </Route>
      </ul>

    </nav>
  );
}

export default Navigation;
