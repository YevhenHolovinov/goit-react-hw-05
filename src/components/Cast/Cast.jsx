import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { featchMovieCredits } from '../../movies';

import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import CastCard from '../CastCard/CastCard';
import css from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function handleMovieCast() {
      try {
        setIsLoading(true);
        setIsError(false);
        const { cast } = await featchMovieCredits(movieId);
        setCast(cast);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    handleMovieCast();
  }, [movieId]);
  return (
    <ul className={css.cardList}>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {cast &&
        cast.map(({ id, ...rest }) => {
          return (
            <li className={css.cardItem} key={id}>
              <CastCard data={rest} />
            </li>
          );
        })}
    </ul>
  );
}
