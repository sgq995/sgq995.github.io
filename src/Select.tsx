import React from 'react';

import './Select.css';
import './Typography.css'

interface SelectProps extends 
    React.ComponentProps<React.FC>
    , React.HTMLAttributes<HTMLSelectElement> {

}

function Select(props: SelectProps) {
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
