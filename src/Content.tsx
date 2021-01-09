import React from 'react';

import './Content.css';

function Content(props: React.ComponentProps<React.FC>) {
  const { children } = props;

  return (
    <div className="content-container">
      <section className="content">
        {children}
      </section>
    </div>
  );
}

export default Content;
