import React from 'react';

import './Carousel.css'

function Carousel(props) {
  const { children } = props;
  
  return (
    <div className="carousel-container">
      <section className="carousel">
        {children}
      </section>
    </div>
  );
}

export default Carousel;
