import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about-me' id='student'>
      <h2>Студент</h2>
      <p>Виталий</p>
      <p>Фронтенд-разработчик, 30 лет</p>
      <p>Я родился и живу в Саратове, закончил факультет экономики СГУ.
        У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
        Недавно начал кодить.
        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
        начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
      <img src='../../images/profile-img.jpg'/>
      <a href='https://www.facebook.com'>Facebook</a>
      <a href='https://github.com'>Github</a>
    </section>
  );
}

export default AboutMe;
