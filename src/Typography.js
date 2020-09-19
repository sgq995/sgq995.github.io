import React from 'react';
import ThemeContext from './ThemeContext';

import './Typography.css'

function Typography(props) {
  const { children, component='span', special, ...opts } = props;

  // const theme = React.useContext(ThemeContext);
  const className = opts.className ? opts.className : '';
  opts.className = special ? `${className} typography-special` : className;

  return React.createElement(component, opts, children);
}

export default Typography;
