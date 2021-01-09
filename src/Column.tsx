import React from 'react';

import './Column.css';

interface ColumnProps extends React.ComponentProps<React.FC> {
  component?: string;
  className?: string;
}

function Column(props: ColumnProps) {
  const { children, component, className, ...extra } = props;

  const element = component ? component : 'div';
  const composited = className ? `${className} column` : 'column';
  const opts = { className: composited, ...extra };

  return (
    React.createElement(element, opts, children)
  );
}

export default Column;
