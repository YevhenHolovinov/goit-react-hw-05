import { IMG_URL } from '../../movies';
import { DEFAULT_IMG_URL } from '../../movies';

import css from './CastCard.module.css';

export default function CastCard({ data: { profile_path, name, character } }) {
  return (
    <>
      <img
        className={css.avatarImg}
        src={profile_path ? IMG_URL + profile_path : DEFAULT_IMG_URL}
        alt={'avatar ' + name}
        loading="lazy"
      />
      <div className={css.cardContent}>
        <hr className={css.hr} />
        <p className={css.cardTitle}>{name}</p>
        <p className={css.cardDescription}>{character}</p>
      </div>
    </>
  );
}
