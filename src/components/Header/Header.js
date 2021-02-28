import './Header.css';
import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Logo from '../../images/logo.png';
import personIcon from '../../images/profile-icon.svg';
import Navigation from "../Navigation/Navigation";

function Header({ headerText, activeMovie, activeSavedMovie }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuOnOpen = () => setIsMenuOpen(true);
  const menuOnClose = () => setIsMenuOpen(false);


  return (
    <Switch>
      <Route exact path = "/">
        <header className="header header_page_main">
          <div className="header__container">
            <Link className="header__logo header__logo_page_main" to='/'><img src={Logo} alt='логотип'/></Link>
            <nav className="header__buttons">
              <Link to='/signup' className="header__button-register">Регистрация</Link>
              <Link to='/signin' className="header__button-signin">Войти</Link>
            </nav>
          </div>
        </header>
      </Route>

      <Route path={['/signup', '/signin']}>
        <header className='header header_page_notAuthorized'>
        <Link className='header__logo header__logo_page_notAuthorized'  to='/'><img src = {Logo} alt = "логотип"/></Link>
        <h2 className="header__title">{headerText}</h2>
        </header>
      </Route>

      <Route path={['/movies', '/saved-movies', '/profile']}>
        <header className='header header_page_authorized'>
          <Link className='header__logo header__logo_page_main' to='/'><img src = {Logo} alt = "логотип"/></Link>

          <button className='header__menu-button' onClick={menuOnOpen}></button>
          {isMenuOpen && <div className={`header__overlay`}></div>}
          <div className={`header__menu-container ${isMenuOpen && 'header__menu-container_opened'}`}>
          {isMenuOpen &&  <button type="button" className="header__close-button" onClick={menuOnClose}></button>}

            <Navigation isMenuOpen ={isMenuOpen}/>
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
