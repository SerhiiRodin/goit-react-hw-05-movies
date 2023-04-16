import axios from 'axios';

const ENDPOINT = 'https://api.themoviedb.org/';
const KEY = 'e6e5040957b423292e46b69ab1c4061a';

axios.defaults.baseURL = `${ENDPOINT}`;
axios.defaults.params = {
  api_key: KEY,
};

export const getTrendList = () => {
  const res = axios.get('/3/trending/movie/day');

  return res;
};

export const getMovieDetails = movieId => {
  const res = axios.get(`3/movie/${movieId}?`);

  return res;
};


