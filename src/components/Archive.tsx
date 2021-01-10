import React from 'react';

import './Archive.css'
// import Column from './layout/Column';

function Archive(props: React.ComponentProps<React.FC>) {
  const { children } = props;

  return (
    <div className="archive-container">
      <section className="archive">
        {/* <Column> */}
          {children}
        {/* </Column> */}
      </section>
    </div>
  );
}

export default Archive;
