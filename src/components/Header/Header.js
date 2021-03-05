import './Header.css';
import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Logo from '../../images/logo.png';
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header({ isLoggedIn }) {
  return (
    <Switch>
      <Route exact path = "/">
        <header className="header header_page_main">
          <div className="header__container">
            <Link className="header__logo header__logo_page_main" to='/'><img src={Logo} alt='логотип'/></Link>
            {!isLoggedIn &&
            <nav className="header__buttons">
              <Link to='/signup' className="header__button-register">Регистрация</Link>
              <Link to='/signin' className="header__button-signin">Войти</Link>
            </nav>
            }
            {isLoggedIn && <BurgerMenu/>}
          </div>
        </header>
      </Route>

      <Route path={['/movies', '/saved-movies', '/profile']}>
        <header className='header header_page_authorized'>
          <Link className='header__logo header__logo_page_main' to='/'><img src = {Logo} alt = "логотип"/></Link>
          <BurgerMenu/>
        </header>
      </Route>

      <Route path={['/signup', '/signin']}>
        <header className='header header_page_notAuthorized'>
        <Link className='header__logo header__logo_page_notAuthorized'  to='/'><img src = {Logo} alt = "логотип"/></Link>
          <Route path={'/signup'}><h2 className="header__title">Добро пожаловать!</h2></Route>
          <Route path={'/signin'}><h2 className="header__title">Рады видеть!</h2></Route>
        </header>
      </Route>



    </Switch>
  );
}

export default Header;
