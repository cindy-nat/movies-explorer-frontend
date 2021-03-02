import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a className='portfolio__list-link'
             href='https://cindy-nat.github.io/how-to-learn/index.html'
             target="_blank">
            Статичный сайт
          </a>
          <div className='portfolio__list-arrow'></div>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__list-link'
             href='https://cindy-nat.github.io/russian-travel/index.html'
             target="_blank">
            Адаптивный сайт
          </a>
          <div className='portfolio__list-arrow'></div>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__list-link'
             href='https://cindy-nat.github.io/react-mesto-auth/'
          target="_blank">
            Одностраничное приложение
          </a>
          <div className='portfolio__list-arrow'></div>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
