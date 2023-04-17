import { getReviewsMovie } from 'api/moviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const { movieId } = useParams('');

  // const location = useLocation();

  useEffect(() => {
    getReviewsMovie(movieId).then(({ data: { results } }) => {
      // console.log(results);
      setReviews(results);
    });
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 &&
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p className={css.author}>{author}</p>
            <p>{content}</p>
          </li>
        ))}
      {reviews.length === 0 && (
        <p className={css.text}>We don`t have any reviews fro this movie.</p>
      )}
    </ul>
  );
};

export default Reviews;
