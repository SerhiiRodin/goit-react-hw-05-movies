import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api/moviesApi';
import css from './MovieDetails.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const defaultFoto =
  'https://place-hold.it/350x500/ffffff/000/e3e3e3&text=no_photo';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams('');

  const { poster_path, title, genres, overview, release_date, vote_average } =
    movie;

  // console.log(genres);
  // console.log(movie);
  // genres.map(genre => (genre.name));

  useEffect(() => {
    getMovieDetails(movieId).then(({ data }) => setMovie(data));
  }, [movieId]);

  return (
    <>
      <button type="button">Назад</button>
      {title && (
        <div className={css.movieInfo}>
          <div className={css.posterWrapper}>
            <img
              src={poster_path ? BASE_URL + poster_path : defaultFoto}
              alt={title}
            />
          </div>
          <div className={css.infoWrapper}>
            <h2>
              {title} ({release_date ? release_date.slice(0, 4) : 'no date'})
            </h2>
            <p>User Score: {(vote_average * 10).toFixed(0)}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <p>{genres.map(genre => genre.name).join(' ')}</p>
          </div>
        </div>
      )}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
