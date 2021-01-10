import React from 'react';

import './Row.css';

interface RowProps extends 
    React.ComponentProps<React.FC>
    , React.HTMLAttributes<HTMLElement>
    , React.DOMAttributes<HTMLElement> {
  component?: string;
}

function Row(props: RowProps) {
  const { children, component, className, ...extra } = props;

  const element = component ? component : 'div';
  const composited = className ? `${className} row` : 'row';
  const opts = { className: composited, ...extra };

  return (
    React.createElement(element, opts, children)
  );
}

export default Row;
