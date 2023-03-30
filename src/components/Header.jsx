import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header container">
      <div className="header-logo">
        <img src="img\logo.svg" />
      </div>
      <nav className="nav">
        <ul>
          <Link to="/">
            <li>Главная</li>
          </Link>
          <Link to="uslugi">
            <li>Услуги</li>
          </Link>
          <Link to="nash-autopark">
            <li>Наш Автопарк</li>
          </Link>
          <Link to="for-org">
            <li>Организациям</li>
          </Link>
        </ul>
      </nav>
      <div className="header-contacts">
        <p>8 905 370-56-62</p>
        <img src="img\icon_menu_1.svg" />
        <img src="img\icon_menu_2.svg" />
        <img src="img\icon_menu_3.svg" />
        <img src="img\icon_menu_4.svg" />
      </div>
    </header>
  );
};

export default Header;
