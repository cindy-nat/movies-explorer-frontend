import './NavTab.css';
import {Link} from "react-router-dom";

function NavTab() {
  return (
    <section className='navigation-container'>
      <nav className='navigation'>
        <ul className='navigation__list'>
          <li className='navigation__list-item'><a>О проекте</a></li>
          <li className='navigation__list-item'><a>Технологии</a></li>
          <li className='navigation__list-item'><a>Студент</a></li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
