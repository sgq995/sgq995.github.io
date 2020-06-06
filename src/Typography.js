import React from 'react';
import ThemeContext from './ThemeContext';

import './Typography.css'

function Typography(props) {
  const { children, component='span', ...opts } = props;

  // const theme = React.useContext(ThemeContext);

  return React.createElement(component, opts, children);
}

export default Typography;
