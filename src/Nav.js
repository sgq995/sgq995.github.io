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

  const makeImageItem = (link, src, alt, onclick) => {
    return (
      <li className="nav-item" key={alt.toLowerCase()}>
        <a href={link} className="nav-link">
          <img src={src} alt={alt} style={{height: '1em'}} onClick={onclick} />
        </a>
      </li>
    );
  };

  const makeListItem = (key, content) => {
    return (
      <li className="nav-item" key={key.toLowerCase()}>
        {content}
      </li>
    );
  };

  const themeChangeHandle = () => {
    setTheme(theme === LIGHT_THEME ? NIGHT_THEME : LIGHT_THEME);
  };

  return (
    <nav className="navbar">
      <div className="navbar-grid grid-container" 
          style={{
            alignContent: 'center'
          }}>
        <span className="navbar-item 
            col-md-start-2 
            col-lg-start-3 
            col-xl-start-3"
            style={{
              marginLeft: 'auto'
            }}>
          {makeIconItem('bars', faBars)}
        </span>
        <ul className="navbar-nav
            col-xs-span-2 
            col-sm-start-2 col-sm-span-6 
            col-md-start-3 col-md-span-8 
            col-lg-start-4 col-lg-span-6 
            col-xl-start-4 col-xl-span-6">
          {/* {makeImageItem('#', MenuIcon, 'Menu')} */}
          {items.map(item => makeListItem(item, makeLinkItem(item)))}
        </ul>
        {makeLinkItem(theme === LIGHT_THEME ? 'Night' : 'Light', '#', themeChangeHandle)}
      </div>
    </nav>
  );
}

export default Nav;
