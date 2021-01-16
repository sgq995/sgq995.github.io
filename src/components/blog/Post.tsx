import React from 'react';

import Tag from './Tag';

import '../../assets/styles/components/blog/Post.scss';

interface PostProps {
  title: string;
  subtitle: string;
  date: Date;
  tags?: React.ComponentProps<typeof Tag>[];
  paragraphs: string[];
}

function dateToString(date: Date) {
  const day = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  const time = `${date.getHours()}:${date.getMinutes()}`;
  return `${day} - ${time}`;
}

function Post({ title, date, subtitle, tags, paragraphs }: PostProps) {
  return (
    <article className="Post">
      <hgroup className="Post__header">
        <h2 className="Post__headline1">{title}</h2>
        <h3 className="Post__headline2">{subtitle}</h3>

        <div className="Post__caption">{dateToString(date)}</div>

        {tags && tags.map(tag =>
          <Tag
            {...tag}
          />
        )}

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
