import React from 'react';

import '../../assets/styles/components/blog/Post.scss';

interface PostProps {
  title: string;
  subtitle: string;
  tags?: string[];
  paragraphs: string[];
}

function Post({ title, subtitle, paragraphs }: PostProps) {
  return (
    <article className="Post">
      <hgroup className="Post__header">
        <h2 className="Post__headline1">{title}</h2>
        <h3 className="Post__headline2">{subtitle}</h3>

        <a href="#">
          <span className="Post__caption">
            tags (1)
          </span>
        </a>
      </hgroup>

      {paragraphs.map(paragraph => (
        <p className="Post__body">
          {paragraph}
        </p>
      ))}

      <footer className="Post__footer">
        {/* <Row>
          <Icon icon="notifications" />
          <Icon icon="notifications" />
        </Row> */}
      </footer>
    </article>
  );
}

export default Post;
