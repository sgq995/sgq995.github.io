import React from 'react';
import Post from '../components/Post';
import Separator from '../components/Separator';

import './Blog.css';

function Blog() {
  return (
    <div className="Blog">
      <div className="Blog__wrapper">
        <div className="Blog__content">
          <Post />

          <Separator />

          <Post />

          <Separator />

          <Post />
        </div>
      </div>

      {/* <div className="Blog__glass"></div> */}
    </div>
  );
}

export default Blog;
