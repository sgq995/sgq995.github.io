import React from 'react';

import './ThemeContext.css';

const ThemeContext = React.createContext({
  colors: {
    primary: '',
    secondary: '',
  },

  textTheme: {
    colors: {
      primary: '',
      secondary: '',
    },

    skin: {
      title: 'h2',
      subtitle: 'h3', 
    },
  },
  // TODO: populate with theme properties...
});

export default ThemeContext;
