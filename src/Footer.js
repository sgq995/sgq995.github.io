import React from 'react';

import './Footer.css';

function Footer(props) {
  const { children } = props;

  return (
    <footer class="footer">
      {children}
    </footer>
  );
}

export default Footer;
