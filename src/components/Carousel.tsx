import React from 'react';

import './Carousel.css'

function Carousel(props: React.ComponentProps<React.FC>) {
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
