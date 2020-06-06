import React from 'react';

import './Footer.css';

function Footer(props) {
  const { children } = props;

  return (
    <footer className="footer">
      {children}
    </footer>
  );
}

export default Footer;
