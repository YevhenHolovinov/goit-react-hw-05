import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { useDebounce } from 'use-debounce';

import { featchSearchMovie } from '../../movies';

import MoviesList from '../../components/MoviesList/MoviesList';
import SearchForm from '../../components/SearchForm/SearchForm';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import css from './MoviesPage.module.css';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query') ?? '';
  const [search, setSearch] = useState(queryValue);
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function handleSearchMovie1() {
      try {
        setIsLoading(true);
        setIsError(false);
        setMovies(null);
        setSearch('');
        const data = await featchSearchMovie(queryValue);
        setMovies(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    handleSearchMovie1();
  }, [queryValue]);

  const handleChange = (searchValue) => {
    setSearch(searchValue);
  };

  const handleSearchMovie = (query) => {
    setSearchParams(query);
  };

  // const handleSearchMovie = (event) => {
  //   const nextParams = new URLSearchParams(searchParams);

  //   if (event.target.value !== '') {
  //     nextParams.set('query', event.target.value);
  //   } else {
  //     nextParams.delete('query');
  //   }

  //   setSearchParams(nextParams);
  // };

  return (
    <section className={css.container}>
      <h2 className={css.title}>Search Movies</h2>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <SearchForm
        query={search}
        handleChange={handleChange}
        handleSearchMovie={handleSearchMovie}
      />
      {movies && <MoviesList movies={movies} />}
    </section>
  );
}
