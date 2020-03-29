import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {DARK_THEME, LIGHT_THEME} from './themes';

import './Nav.css';

function Nav(props) {
  const {theme, setTheme} = props;

  const items = [
    'Blog',
    'Projects',
    'About me',
    'Contact'
  ];
  
  const makeIconItem = (key, icon, iconProps, link, onclick) => {
    return (
      <a href={link ? link : '#'} className="nav-link" onClick={onclick}>
        <FontAwesomeIcon icon={icon} props={iconProps} />
      </a>
    );
  };

  const makeLinkItem = (text, link, onclick) => {
    return (
      <a href={link ? link : '#'} className="nav-link" onClick={onclick}>{text}</a>
    );
  };

  const makeListItem = (key, content, classes) => {
    const plainClases = typeof classes === "string" ? classes : Array.isArray(classes) ? classes.join(' ') : '';

    return (
      <li className={"nav-item " + plainClases} key={key.toLowerCase()}>
        {content}
      </li>
    );
  };

  const themeChangeHandle = () => {
    const nextTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  };

  const bars = makeIconItem('bars', faBars);
  const themeSelector = makeLinkItem(theme === LIGHT_THEME ? 'Dark' : 'Light', '#', themeChangeHandle);

  return (
    <nav className="navbar">
        <ul className="navbar-nav">
          {makeListItem('bars', bars, 'navbar-menu')}
          {items.map(item => makeListItem(item, makeLinkItem(item)))}
          {makeListItem('theme', themeSelector, 'navbar-theme')}
        </ul>
    </nav>
  );
}

export default Nav;
