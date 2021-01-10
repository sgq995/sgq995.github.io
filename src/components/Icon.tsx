import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconProps extends React.ComponentProps<React.FC> {
  icon: string;
}

function Icon(props: IconProps) {
  const { icon, ...opts } = props;

  return (
    <span className="material-icons" {...opts}>
      {icon}
    </span>
    // <FontAwesomeIcon icon={icon} props={{...props}} />
  );
}

export default Icon;
