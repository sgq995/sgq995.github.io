import React from 'react';

import './NavBar.css';

function NavBar(props: React.ComponentProps<React.FC<
      React.DOMAttributes<HTMLDivElement>
      | React.HTMLAttributes<HTMLDivElement>
    >>) {
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
