import React from 'react';
import Typography from './Typography';
import Icon from './Icon';

import './ButtonIcon.css'

function ButtonIcon(props) {
  const { icon, onClick, ...extra } = props;

  return (
    <button className="button-icon" onClick={onClick}>
      <Typography className="button">
        <Icon icon={icon} />
      </Typography>
    </button>
  );
}

export default ButtonIcon;
