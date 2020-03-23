import React from 'react';

import MenuIcon from './icon-menu.svg';
import './Nav.css';

function Nav() {
  const items = [
    'Blog',
    // 'Portafolio',
    'Projects',
    'About me',
    'Contact',
    'Test'
  ];
  
  const makeNavItem = (text, link) => {
    return (
      <li className="nav-item" key={text.toLowerCase()}>
        <a href={link ? link : '#'} className="nav-link">{text}</a>
      </li>
    );
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item" key="burger">
          <a href="#" className="nav-link">
            <img src={MenuIcon} alt="burger" width="32" />
          </a>
        </li>
        {items.map(item => makeNavItem(item))}
      </ul>
    </nav>
  );
}

export default Nav;
