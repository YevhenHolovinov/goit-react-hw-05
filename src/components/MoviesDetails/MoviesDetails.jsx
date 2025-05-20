import { IMG_URL } from '../../movies';
import { DEFAULT_IMG_URL } from '../../movies';
import css from './MoviesDetails.module.css';

export default function MoviesDetails({ movieDetails, genres, score }) {
  return (
    <div className={css.contentWrapper}>
      <img
        className={css.posterImg}
        src={
          movieDetails.backdrop_path
            ? IMG_URL + movieDetails.backdrop_path
            : DEFAULT_IMG_URL
        }
        alt={movieDetails.title}
      />
      <div className={css.content}>
        <p className={css.contentTitle}>{movieDetails.title}</p>
        <span className={css.score}>User Score: {score}%</span>
        <span className={css.overviewTitle}>Overview</span>
        <p className={css.overviewText}>{movieDetails.overview}</p>
        <span className={css.genresTitle}>Genres</span>
        <p className={css.genresText}>{genres}</p>
      </div>
    </div>
  );
}
