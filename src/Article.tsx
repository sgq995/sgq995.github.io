import React from 'react';

import './Article.css';
import './Card.css';

interface ArticleProps extends React.ComponentProps<React.FC> {
  title: string,
  subtitle: string,
  content: string,
  date: string,
}

function Article({ title, subtitle, content, date }: ArticleProps) {
  const wordList = content.split(' ');
  const summary = wordList.slice(0, 10).join(' ') + '...';

  return (
    <article className="article card">
      <header>
        <h1 className="article-title">{title}</h1>
        <h3 className="article-subtitle">{subtitle}</h3>
      </header>
      <section>
        <details>
          <p>
            {content}
          </p>
          <summary>
            {summary}
          </summary>
        </details>
      </section>
      <footer className="article-footer">
        Posted on {date}
      </footer>
    </article>
  );
}

export default Article;
