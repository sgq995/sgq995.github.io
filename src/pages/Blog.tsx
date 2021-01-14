import React from 'react';
import Nav from '../components/Nav';
import Post from '../components/Post';
import Separator from '../components/Separator';

import './Blog.css';

function Blog() {
  return (
    <div className="Blog">
      <div className="Blog__wrapper">
        <Nav />

        <section className="Blog__content">
          <Post />

          <Separator />

          <Post />

          <Separator />

          <Post />
        </section>
      </div>
    </div>
  );
}

export default Blog;
