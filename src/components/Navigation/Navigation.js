import React from 'react';
import './Navigation.css';
import {NavLink} from "react-router-dom";


function Navigation({ isMenuOpen }) {

  return (
    <nav className='pages-navigation'>
      <ul className='pages-navigation__list'>
        {isMenuOpen &&<li className='pages-navigation__list-item'>
          <NavLink className='pages-navigation__link' activeClassName='pages-navigation__link_active' exact to='/'>
            Главная</NavLink>
        </li> }
        <li className='pages-navigation__list-item'>
          <NavLink className='pages-navigation__link' activeClassName='pages-navigation__link_active' to='/movies'>
            Фильмы</NavLink>
        </li>
        <li className='pages-navigation__list-item'>
          <NavLink className='pages-navigation__link' activeClassName='pages-navigation__link_active' to='/saved-movies'>
            Сохраненные фильмы</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
