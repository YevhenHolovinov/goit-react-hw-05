import css from './MuviesCard.module.css';
import { IMG_URL } from '../../movies';
import { DEFAULT_IMG_URL } from '../../movies';

export default function MoviesCard({ movies }) {
  return (
    <>
      <img
        className={css.avatarImg}
        src={
          movies.poster_path ? IMG_URL + movies.poster_path : DEFAULT_IMG_URL
        }
        alt={'avatar ' + movies.title}
        loading="lazy"
      />
      <div className={css.cardContent}>
        <p className={css.cardTitle}>{movies.title}</p>
        <p className={css.cardDate}>{movies.release_date}</p>
      </div>
    </>
  );
}
