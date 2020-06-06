import React from 'react';

import './Select.css';
import './Typography.css'

function Select(props) {
  const { children, className, ...opts } = props;

  const defaultClass = 'select typography-caption';
  const composited = className ? `${defaultClass} ${className}` : defaultClass; 

  return (
    <select className={composited} {...opts}>
      {children}
    </select>
  );
}

export default Select;
