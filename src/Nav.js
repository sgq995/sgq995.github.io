import React from 'react';

import './Nav.css';

function Nav() {
  const items = [
    'Blog',
    'Portafolio',
    'About me',
    'Contact'
  ];
  
  const navItem = (text, link) => {
    return (
      <li className="item" key={text.toLowerCase()}>
        <a href={link ? link : '#'}>{text}</a>
      </li>
    );
  };

  return (
    <nav className="nav">
      <ul>
        {items.map(item => navItem(item))}
      </ul>

      <div className="right">

      </div>
    </nav>
  );
}

export default Nav;
