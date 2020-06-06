import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Icon(props) {
  const { icon, ...opts } = props;

  return (
    <span className="material-icons" {...opts}>
      {icon}
    </span>
    // <FontAwesomeIcon icon={icon} props={{...props}} />
  );
}

export default Icon;
