import React from 'react';
import './AboutMe.css';
import studentPhoto from '../../images/profile-img.jpg';

function AboutMe() {
  return (
    <section className='about-me' id='student'>
      <h2 className='about-me__title'>Студент</h2>
        <img className='about-me__photo' src={studentPhoto} alt='фото студента'/>
        <div className='about-me__table'>
          <p className='about-me__name'>Виталий</p>
          <p className='about-me__position'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ.
            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className='about-me__links-list'>
            <li><a className='about-me__link' href='https://www.facebook.com' target="_blank">Facebook</a></li>
            <li><a className='about-me__link' href='https://github.com' target="_blank">Github</a></li>
          </ul>
      </div>
    </section>
  );
}

export default AboutMe;
