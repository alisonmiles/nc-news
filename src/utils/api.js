import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://alison-nc-news.herokuapp.com/api',
});

export const getArticles = async (category, sortBy) => {
  let path = `/articles`;
  if (category && sortBy) path += `?topic=${category}&${sortBy}`;
  if (category && !sortBy) path += `?topic=${category}`;
  if (sortBy && !category) path += `?${sortBy}`;
  const { data } = await newsApi.get(path);
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
  return data.article;
};

export const getTopics = async () => {
  const { data } = await newsApi.get(`/topics`);
  return data.topics;
};

export const postComment = async (article_id, newComment) => {
  const { data } = await newsApi.post(
    `articles/${article_id}/comments`,
    newComment
  );
  return data.comment[0];
};

export const getUsers = async () => {
  const { data } = await newsApi.get(`/users`);
  return data.users;
};

export const getUser = async (username) => {
  const {data} = await newsApi.get(`users/${username}`);
  return data.user;
}
