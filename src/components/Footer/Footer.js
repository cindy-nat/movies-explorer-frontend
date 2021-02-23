import React from 'react';
import './Footer.css';

function Footer() {
  const date = new Date();

  return (
    <footer className='footer'>
      <p className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <p className='footer__date'>&#169; {date.getFullYear().toString()}</p>
        <ul className='footer__list'>
          <li className='footer__list-item'><a className='footer__link' href='https://praktikum.yandex.ru/'>Яндекс.Практикум</a></li>
          <li className='footer__list-item'><a className='footer__link' href='https://github.com/'>Github</a></li>
          <li className='footer__list-item'><a className='footer__link' href='https://www.facebook.com/'>Facebook</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
