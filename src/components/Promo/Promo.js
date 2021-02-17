import './Promo.css';
import Logo from '../../images/logo.png';

function Promo() {
  return (
    <div className='promo'>
      <div className="promo__container">
        <div className="promo__navigation">
          <img className="promo__logo" src={Logo} alt='логотип'/>
          <nav className="promo__buttons">
            <button className="promo__button-register">Регистрация</button>
            <button className="promo__button-signin">Войти</button>
          </nav>
        </div>
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <div className="promo__big-logo"></div>
      </div>
    </div>
  );
}

export default Promo;
