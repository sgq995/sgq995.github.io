import React from 'react';

function Article(props) {
  const { title, subtitle, content, date } = props;

  return (
    <article>
      <header>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </header>
      <section>
        <p>
          {content}
        </p>
      </section>
      <footer>
        <p>Posted on {date}</p>
      </footer>
    </article>
  );
}

export default Article;
