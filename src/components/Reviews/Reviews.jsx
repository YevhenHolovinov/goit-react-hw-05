import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { featchMovieReviews } from '../../movies';

import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ReviewsCard from '../ReviewsCard/ReviewsCard';
import css from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const handleMovieReview = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await featchMovieReviews(movieId);
        setReviews(results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    handleMovieReview();
  }, [movieId]);
  return (
    <div className={css.content}>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {reviews && <ReviewsCard reviews={reviews} />}
    </div>
  );
}
