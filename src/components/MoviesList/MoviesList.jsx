import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul className={css.cardList}>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`} state={location}>
          <li className={css.cardItem}>
            <MoviesCard movies={movie} />
          </li>
        </Link>
      ))}
    </ul>
  );
}
