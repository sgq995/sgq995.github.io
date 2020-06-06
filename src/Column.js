import React from 'react';

import './Column.css';

function Column(props) {
  const { children, component, className, ...extra } = props;

  const element = component ? component : 'div';
  const composited = className ? `${className} column` : 'column';
  const opts = { className: composited, ...extra };

  return (
    React.createElement(element, opts, children)
  );
}

export default Column;
