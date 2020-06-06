import React from 'react';
import Link from './Link';

import './ButtonLink.css';
import Typography from './Typography';

function ButtonLink(props) {
  const { children, onClick, href, ...extra } = props;

  return (
    <Link className="link-button" href={href} onClick={onClick} {...extra}>
      <Typography component="span" className="typography-button">
        {children}
      </Typography>
    </Link>
  );
}

export default ButtonLink;
