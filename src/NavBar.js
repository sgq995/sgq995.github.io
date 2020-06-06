import React from 'react';

import './NavBar.css';

function NavBar(props) {
  const { children, ...opts } = props;

  return (
    <div className="navbar" {...opts}>
      <nav className="nav">
        {children}
      </nav>
    </div>
  );
}

export default NavBar;
