import React from 'react';

import './Nav.css';

function Nav() {
  const items = [
    'Blog',
    'Portafolio',
    'About me',
    'Contact',
    'Test'
  ];
  
  const navItem = (text, link) => {
    return (
      <li className="nav-item" key={text.toLowerCase()}>
        <a href={link ? link : '#'} className="nav-link">{text}</a>
      </li>
    );
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {items.map(item => navItem(item))}
      </ul>
    </nav>
  );
}

export default Nav;
