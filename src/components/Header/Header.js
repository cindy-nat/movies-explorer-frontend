import './Header.css';
import React from "react";
import logo from '../../images/logo.png';
import { Route, Switch } from "react-router-dom";
import Logo from "../../images/logo.png";

function Header() {
  return (
    <Switch>
      <Route exact path = "/">
        <header className="header header_page_main">
          <div className="header__container">
            <img className="header__logo" src={Logo} alt='логотип'/>
            <nav className="header__buttons">
              <button className="header__button-register">Регистрация</button>
              <button className="header__button-signin">Войти</button>
            </nav>
          </div>
        </header>
      </Route>

      <Route path='/sdfdf'>
        <div className="header">
        <img className="header__logo" src = {logo} alt = "логотип"/>
        <p className="header__text">Аккаунт</p>
        <div className="header__account-picture"></div>
      </div>
      </Route>
    </Switch>



  );
}

export default Header;
