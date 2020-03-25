import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import MenuIcon from './icon-menu.svg';
import './Nav.css';

function Nav(props) {
  const LIGHT_THEME = 'light';
  const NIGHT_THEME = 'night';

  const [theme, setTheme] = React.useState(LIGHT_THEME);

  const items = [
    'Blog',
    // 'Portafolio',
    'Projects',
    'About me',
    'Contact'
  ];
  
  const makeIconItem = (key, icon, iconProps, link, onclick) => {
    return (
      <li className="nav-item" key={key}>
        <a href={link ? link : '#'} className="nav-link" onClick={onclick}>
          <FontAwesomeIcon icon={icon} props={iconProps} />
        </a>
      </li>
    );
  };

  const makeLinkItem = (text, link, onclick) => {
    return (
      <li className="nav-item" key={text.toLowerCase()}>
        <a href={link ? link : '#'} className="nav-link" onClick={onclick}>{text}</a>
      </li>
    );
  };

  const makeImageItem = (link, src, alt, onclick) => {
    return (
      <li className="nav-item" key={alt.toLowerCase()}>
        <a href={link} className="nav-link">
          <img src={src} alt={alt} style={{height: '1em'}} onClick={onclick} />
        </a>
      </li>
    );
  }

  const themeChangeHandle = () => {
    setTheme(theme === LIGHT_THEME ? NIGHT_THEME : LIGHT_THEME);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {/* {makeImageItem('#', MenuIcon, 'Menu')} */}
        {makeIconItem('bars', faBars)}
        {items.map(item => makeLinkItem(item))}
        {makeLinkItem(theme === LIGHT_THEME ? 'Night' : 'Light', '#', themeChangeHandle)}
      </ul>
    </nav>
  );
}

export default Nav;
