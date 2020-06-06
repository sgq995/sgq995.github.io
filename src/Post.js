import React from 'react';
import Typography from './Typography';
import Link from './Link';

import './Post.css'
import Icon from './Icon';

function Post(props) {
  const { children } = props;

  return (
    <article className="post">
      <header className="post-header">
        <Typography component="h2" className="post-title">
          <Link href="#">
            Title
          </Link>
        </Typography>
        <Link href="category">category</Link>
        <Typography component="h3">Subtitle</Typography>
      </header>
      <Typography component="p" className="post-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec purus sed metus convallis vehicula non in lacus. Vestibulum nec porta erat. Curabitur suscipit nisi tellus, sed laoreet augue dapibus sed. Duis tristique molestie accumsan. Maecenas pellentesque pretium magna non posuere. Cras ultricies ultrices nunc sit amet sagittis. Nullam a nunc tempus, posuere nisl accumsan, bibendum lectus. Duis bibendum mauris et lacus lacinia cursus. Aenean auctor ex vel turpis congue, vel congue lacus venenatis. Mauris commodo egestas ante sit amet vehicula. Nam luctus, massa at congue consectetur, tellus nibh congue tortor, vel facilisis velit lorem sit amet tortor. Vivamus in neque et enim consectetur ornare id quis lacus. Vestibulum interdum mauris erat, eu gravida ex dictum in. Donec tincidunt hendrerit egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <footer className="post-footer">
        <Icon icon="notifications" />
        <Typography>tags...</Typography>
      </footer>
    </article>
  );
}

export default Post;
