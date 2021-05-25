import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://alison-nc-news.herokuapp.com/api',
});

export const getArticles = async () => {
  const { data } = await newsApi.get('/articles');
  return data.articles;
};

export const getArticle = async (article_id) => {
  const { data } = await newsApi.get(`/articles/${article_id}`);
  return data.article;
};

export const getComments = async (article_id) => {
  const { data } = await newsApi.get(`/articles/${article_id}/comments`);
  return data.comments;
};

export const patchVotes = async (article_id, num) => {
  const { data } = await newsApi.patch(`articles/${article_id}`, {
    inc_votes: num,
  });
  console.log(data.article);
  return data.article;
};

export const getTopics = async () => {
  const { data } = await newsApi.get(`/topics`);
  return data.topics;
};
