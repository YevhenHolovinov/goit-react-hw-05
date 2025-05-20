import css from './ReviewsCard.module.css';
import { IMG_URL } from '../../movies';
import { DEFAULT_IMG_URL } from '../../movies';

export default function ReviewsCard({ reviews }) {
  return (
    <>
      {reviews.map(
        ({ id, author, content, author_details: { avatar_path, rating } }) => (
          <article key={id}>
            <h3 className={css.reviewTitle}>{'Author: ' + author}</h3>
            <div className={css.reviewContentWrapper}>
              <img
                className={css.reviewImage}
                src={avatar_path ? IMG_URL + avatar_path : DEFAULT_IMG_URL}
                alt={author + ' avatar'}
              />
              <div className={css.reviewContent}>
                <p className={css.reviewRating}>
                  Rating:
                  <span className={css.reviewRatingValue}>
                    {rating ? rating : 0}
                  </span>
                </p>
                <p className={css.reviewDescription}>{content}</p>
              </div>
            </div>
          </article>
        )
      )}
    </>
  );
}
