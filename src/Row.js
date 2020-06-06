import React from 'react';

import './Row.css';

function Row(props) {
  const { children, component, className, ...extra } = props;

  const element = component ? component : 'div';
  const composited = className ? `${className} row` : 'row';
  const opts = { className: composited, ...extra };

  return (
    React.createElement(element, opts, children)
  );
}

export default Row;
