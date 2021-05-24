import React, { useEffect } from 'react';
import { getArticles } from '../utils/api';

const Articles = ({ articles, setArticles }) => {
  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  console.log('>>>>>', articles);

  return (
    <main>
      <h2>All Articles</h2>
      {articles.map((article) => {
        return <li>{article.title}</li>;
      })}
    </main>
  );
};

export default Articles;

// 0:
// article_id: 34
// author: "grumpy19"
// comment_count: "11"
// created_at: "2020-11-22T11:13:00.000Z"
// title: "The Notorious MSG’s Unlikely Formula For Success"
// topic: "cooking"
// votes: 0
