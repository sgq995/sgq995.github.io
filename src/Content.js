import React from 'react';

import './GridLayout.css';

function Content(props) {
    const { children } = props;

    return (
        <div className="grid-container">
            <main className="col-xs-span-4 col-sm-start-2 col-sm-span-6 col-md-start-3 col-md-span-8 col-lg-start-4 col-lg-span-6">
            {/* <main className="col-sm-start-2 col-sm-span-6 col-start-3 col-span-8"> */}
                {children}
            </main>
        </div>
    );
}

export default Content;
