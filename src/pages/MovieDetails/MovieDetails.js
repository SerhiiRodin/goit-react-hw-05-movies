import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api/moviesApi';
import css from './MovieDetails.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const defaultFoto =
  'https://place-hold.it/350x500/ffffff/000/e3e3e3&text=no_photo';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams('');

  const location = useLocation();
  // console.log('details', location);
  // console.log('details-loc', location.state.from);
  // Сохраняется location.state.from если перейти еще в грубь, можно в useRef.
  // или прокидывать дальше state={{ from: location.state.from }}
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

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
      <Link to={backLinkLocationRef.current} className={css.button}>
        {/* <Link to={location.state.from} className={css.button}> */}
        Назад
      </Link>
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
      <div className={css.additionInf}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
            {/* <Link to="cast" state={{ from: location.state.from }}>
              Cast
            </Link> */}
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
            {/* <Link to="reviews" state={{ from: location.state.from }}>
              Reviews
            </Link> */}
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
