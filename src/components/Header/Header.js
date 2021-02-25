import './Header.css';
import React from 'react';
import logo from '../../images/logo.png';
import {Link, Route, Switch} from "react-router-dom";
import Logo from '../../images/logo.png';
import personIcon from '../../images/profile-icon.png';
import Navigation from "../Navigation/Navigation";

function Header({ headerText }) {
  return (
    <Switch>
      <Route exact path = "/">
        <header className="header header_page_main">
          <div className="header__container">
            <Link to='/'><img className="header__logo header__logo_page_main" src={Logo} alt='логотип'/></Link>
            <nav className="header__buttons">
              <Link to='/signup' className="header__button-register">Регистрация</Link>
              <Link to='/signin' className="header__button-signin">Войти</Link>
            </nav>
          </div>
        </header>
      </Route>

      <Route path={['/signup', '/signin']}>
        <header className='header header_page_notAuthorized'>
        <Link to='/'><img className='header__logo header__logo_page_notAuthorized' src = {logo} alt = "логотип"/></Link>
        <h2 className="header__title">{headerText}</h2>
        </header>
      </Route>

      <Route path={['/movies', '/saved-movies', '/profile']}>
        <header className='header header_page_authorized'>
          <Link to='/'><img className='header__logo header__logo_page_main' src = {logo} alt = "логотип"/></Link>
          <div className='header__menu-container'>
            <Navigation/>
            <Link to='./profile' className='header__link'>Аккаунт
              <span className='header__icon-container'>
                <img className='header__person-icon' src={personIcon}/>
              </span>
            </Link>
          </div>
        </header>
      </Route>

    </Switch>
  );
}

export default Header;
