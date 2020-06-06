import React from 'react';
import Link from './Link';

import './LinkButton.css';

function LinkButton(props) {
  const { children, onClick, href, ...extra } = props;

  return (
    <Link className="link-button" href={href} onClick={onClick} {...extra}>
      {children}
    </Link>
  );
}

export default LinkButton;
