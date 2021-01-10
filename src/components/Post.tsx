import React from 'react';
import Typography from './Typography';
import Link from './button/Link';

import './Post.css'
import Icon from './Icon';
import Row from './layout/Row';

function Post(props: React.ComponentProps<React.FC>) {
  const { children } = props;

  return (
    <article className="post">
      <header className="post-header">
        <Typography component="h2" className="typography-headline2">
          <Link href="#" className="post-title">
            Title
          </Link>
        </Typography>
        <Row>
          <Link href="category" className="typography-subtitle2">category</Link>
        </Row>
        <Typography component="h3" className="typography-subtitle1">Subtitle</Typography>
      </header>
      <Typography component="p" className="post-content typography-body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec purus sed metus convallis vehicula non in lacus. Vestibulum nec porta erat. Curabitur suscipit nisi tellus, sed laoreet augue dapibus sed. Duis tristique molestie accumsan. Maecenas pellentesque pretium magna non posuere. Cras ultricies ultrices nunc sit amet sagittis. Nullam a nunc tempus, posuere nisl accumsan, bibendum lectus. Duis bibendum mauris et lacus lacinia cursus. Aenean auctor ex vel turpis congue, vel congue lacus venenatis. Mauris commodo egestas ante sit amet vehicula. Nam luctus, massa at congue consectetur, tellus nibh congue tortor, vel facilisis velit lorem sit amet tortor. Vivamus in neque et enim consectetur ornare id quis lacus. Vestibulum interdum mauris erat, eu gravida ex dictum in. Donec tincidunt hendrerit egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <footer className="post-footer">
        <Row>
          <Icon icon="notifications" />
          <Icon icon="notifications" />
        </Row>
        <Typography className="typography-caption">
          <Link href="#">tags (1)</Link>
        </Typography>
      </footer>
    </article>
  );
}

export default Post;
