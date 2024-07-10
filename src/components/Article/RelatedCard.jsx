// RelatedCard.js

import React from 'react';

const RelatedCard = ({ articles }) => {
  return (
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
      {articles.map((article, index) => (
        <article key={index} className="max-w-xs">
          <a href={article.link}>
            <img
              src={article.image}
              className="mb-5 rounded-lg"
              alt={`Image ${index + 1}`}
            />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href={article.link}>{article.title}</a>
          </h2>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            {article.content}
          </p>
          <a
            href={article.link}
            className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
          >
            Read in 2 minutes
          </a>
        </article>
      ))}
    </div>
  );
};

export default RelatedCard;
