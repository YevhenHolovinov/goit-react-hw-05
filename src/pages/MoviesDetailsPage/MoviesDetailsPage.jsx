import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { featchMovieById } from '../../movies';

import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import MoviesDetails from '../../components/MoviesDetails/MoviesDetails';
import SubNavigation from '../../components/SubNavigation/SubNavigation';

import css from './MoviesDetailsPage.module.css';

export default function MoviesDetailsPage() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state);

  useEffect(() => {
    async function getDetailsMovies() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await featchMovieById(movieId);
        setMovieDetail(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getDetailsMovies();
  }, [movieId]);

  const score = useMemo(() => {
    if (!movieDetail.vote_average || !movieDetail.vote_count) return 0;
    return ((movieDetail.vote_average / movieDetail.vote_count) * 100).toFixed(
      0
    );
  }, [movieDetail.vote_average, movieDetail.vote_count]);

  const genres = useMemo(() => {
    if (!movieDetail.genres) return;
    const genresOfMovie = movieDetail.genres
      .map((genre) => genre.name)
      .join(' ');
    return genresOfMovie;
  }, [movieDetail.genres]);

  return (
    <section className={css.container}>
      <h2 className={css.title}>Detail info</h2>
      <Link to={backLinkRef.current}>
        <button
          className={css.goBackBtn}
          type="button"
          aria-label="go to home page"
        >
          Go back
        </button>
      </Link>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {movieDetail && (
        <MoviesDetails
          movieDetails={movieDetail}
          score={score}
          genres={genres}
        />
      )}
      <h2 className={css.additionalTitle}>Additional information</h2>
      <SubNavigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
}
