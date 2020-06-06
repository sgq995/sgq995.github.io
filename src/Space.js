import React from 'react';

function Space(props) {
  const { width, height } = props;

  return (
    <span style={{width, height}}></span>
  );
}

export default Space;
