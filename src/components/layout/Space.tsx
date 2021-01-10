import React from 'react';

interface SpaceProps {
  width?: string;
  height?: string;
}

function Space(props: SpaceProps) {
  const { width, height } = props;

  return (
    <span style={{width, height}}></span>
  );
}

export default Space;
