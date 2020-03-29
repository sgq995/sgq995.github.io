import React from 'react';

import './Article.css'

function Article(props) {
  const { title, subtitle, content, date } = props;

  const wordList = content.split(' ');
  const summary = wordList.slice(0, 10).join(' ') + '...';

  return (
    <article className="article">
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
