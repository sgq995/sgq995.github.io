import React from 'react';
import Link from './Link';

import './ButtonLink.css';
import Typography from './Typography';

interface ButtonLinkProps extends 
    React.ComponentProps<React.FC>
    , React.DOMAttributes<HTMLAnchorElement> {
  href: string;
}

function ButtonLink(props: ButtonLinkProps) {
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
