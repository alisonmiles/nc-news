import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://alison-nc-news.herokuapp.com/api',
});

export const getArticles = async () => {
  const { data } = await newsApi.get('/articles');
  console.log('api/js', data.articles);
  return data.articles;
};
