import React from 'react';

import '../../assets/styles/components/blog/Tag.scss';

interface TagProps {
  link: string;
  name: string;
  count: number;
}

function Tag({ link, name, count }: TagProps) {
  return (
    <a className="Tag" href={link}>
      <span className="Tag__body">
        {name} ({count})
      </span>
    </a>
  );
}

export default Tag;
