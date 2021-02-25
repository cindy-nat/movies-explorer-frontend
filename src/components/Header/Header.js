import './Header.css';
import React from "react";
import logo from '../../images/logo.png';
import {Link, Route, Switch} from "react-router-dom";
import Logo from "../../images/logo.png";

function Header({ headerText }) {
  return (
    <Switch>
      <Route exact path = "/">
        <header className="header header_page_main">
          <div className="header__container">
            <img className="header__logo header__logo_page_main" src={Logo} alt='логотип'/>
            <nav className="header__buttons">
              <Link to='/signup' className="header__button-register">Регистрация</Link>
              <Link to='/signin' className="header__button-signin">Войти</Link>
            </nav>
          </div>
        </header>
      </Route>

      <Route path={['/signup', '/signin']}>
        <div className="header header_page_signup">
        <Link to='/'><img className="header__logo header__logo_page_signup" src = {logo} alt = "логотип"/></Link>
        <h2 className="header__title">{headerText}</h2>
      </div>
      </Route>
    </Switch>
  );
}

export default Header;
