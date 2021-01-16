import React from 'react';

interface TagProps {
  link: string;
  name: string;
  count: number;
}

function Tag({ link, name, count }: TagProps) {
  return (
    <a href={link}>
      <span className="Post__caption">
        {name} ({count})
      </span>
    </a>
  );
}

export default Tag;
