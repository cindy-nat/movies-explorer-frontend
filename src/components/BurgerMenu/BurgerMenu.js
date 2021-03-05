import React from 'react';
import './BurgerMenu.css';
import Navigation from "../Navigation/Navigation";
import {Link} from "react-router-dom";
import personIcon from "../../images/profile-icon.svg";

function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuOnOpen = () => setIsMenuOpen(true);
  const menuOnClose = () => setIsMenuOpen(false);
  return (
    <>
      <button className='header__menu-button' onClick={menuOnOpen}></button>
      {isMenuOpen && <div className={`header__overlay`}></div>}
      <div className={`header__menu-container ${isMenuOpen && 'header__menu-container_opened'}`}>
        {isMenuOpen &&  <button type="button" className="header__close-button" onClick={menuOnClose}></button>}

        <Navigation isMenuOpen ={isMenuOpen}/>
        <Link to='/profile' className='header__link'>Аккаунт
        <span className='header__icon-container'>
          <img className='header__person-icon' src={personIcon} alt='иконка человека'/>
        </span>
        </Link>
      </div>
    </>
  );
}

export default BurgerMenu;
