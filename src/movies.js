import axios from 'axios';

const ACCESS_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDE3MTI3YjZkNjNiNzIzYTE0Mzk5NzUxMzJlOTZiNCIsIm5iZiI6MTc0NTI1Mjc1Ni45OSwic3ViIjoiNjgwNjcxOTRjNWM4MDM1ZmIwOGEyZWIxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.vfFKKf_jMQPE6bLQ9Oa4fAvDodiKRGeIixQU4Mh8tqo';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers = {
  accept: 'application/json',
  Authorization: `Bearer ${ACCESS_KEY}`,
};

export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export const DEFAULT_IMG_URL =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

export const fetchTrendMovies = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?'
  );
  return resp.data.results;
};

export const featchMovieById = async (movieId) => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?`
  );
  return resp.data;
};

export const featchSearchMovie = async (query, page) => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/search/movie?include_adult=`,
    { params: { query, page } }
  );
  return resp.data.results;
};

export const featchMovieCredits = async (movieId) => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?`
  );
  return resp.data;
};

export const featchMovieReviews = async (movieId) => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?`
  );
  return resp.data;
};
