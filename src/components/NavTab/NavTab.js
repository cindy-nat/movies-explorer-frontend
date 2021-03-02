import React from 'react';
import './NavTab.css';

function NavTab() {

  return (
    <section className='navigation'>
      <nav className='navigation__container'>
        <ul className='navigation__list'>
          <li className='navigation__list-item'><a className='navigation__list-item-link' href="#project">О проекте</a></li>
          <li className='navigation__list-item'><a className='navigation__list-item-link' href="#technologies">Технологии</a></li>
          <li className='navigation__list-item'><a className='navigation__list-item-link' href="#student">Студент</a></li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
