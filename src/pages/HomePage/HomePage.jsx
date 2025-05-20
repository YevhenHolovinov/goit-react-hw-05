import { useState, useEffect } from 'react';
import { fetchTrendMovies } from '../../movies';

import MoviesList from '../../components/MoviesList/MoviesList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import css from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrendMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchTrendMovies();
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getTrendMovies();
  }, []);

  return (
    <>
      <h2 className={css.title}>Trending Today</h2>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && !isLoading && <MoviesList movies={movies} />}
    </>
  );
}
