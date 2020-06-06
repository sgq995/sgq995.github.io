import React from 'react';

import './Link.css';

function Link(props) {
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
