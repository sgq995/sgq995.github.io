import React from 'react';

import './Content.css';
import './Card.css';
import './GridLayout.css';

function Content(props) {
  const { children } = props;

  return (
    <div className="content grid-container">
      <main className="content-main
          col-xs-span-4 
          col-sm-start-2 col-sm-span-6 
          col-md-start-2 col-md-span-7 
          col-lg-start-2 col-lg-span-7 
          col-xl-start-2 col-xl-span-7">
        {children}
      </main>
      <aside className="content-aside
          col-xs-span-4
          col-sm-start-2 col-sm-span-6
          col-md-start-9 col-md-span-3
          col-lg-start-9 col-lg-span-3
          col-xl-start-9 col-xl-span-3">
        <section className="card">
          <details className="content-aside-details">
            <summary className="content-aside-summary">
              2020
            </summary>
            <details className="content-aside-details">
              <summary className="content-aside-summary">
                March
              </summary>
              <ul>
                <li>23</li>
                <li>29</li>
              </ul>
            </details>
          </details>
        </section>
        <section className="card">
          Extra...
        </section>
      </aside>
    </div>
  );
}

export default Content;
