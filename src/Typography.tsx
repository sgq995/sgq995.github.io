import React from 'react';
import ThemeContext from './ThemeContext';

import './Typography.css'

interface TypographyProps extends
    React.ComponentProps<React.FC>
    , React.HTMLAttributes<HTMLElement> {
  component?: string;
  special?: boolean;
}

function Typography(props: TypographyProps) {
  const { children, component='span', special, ...opts } = props;

  // const theme = React.useContext(ThemeContext);
  const className = opts.className ? opts.className : '';
  opts.className = special ? `${className} typography-special` : className;

  return React.createElement(component, opts, children);
}

export default Typography;
