import React from 'react';

import './Link.css';

interface LinkProps extends 
    React.ComponentProps<React.FC>
    , React.DOMAttributes<HTMLAnchorElement> {
  className?: string;
  href?: string;
}

function Link(props: LinkProps) {
  const { children, className, ...opts } = props;

  const defaultClass = 'link';
  const composited = className ? `${defaultClass} ${className}` : defaultClass;

  return (
    <a className={composited} {...opts}>
      {children}
    </a>
  );
}

export default Link;
