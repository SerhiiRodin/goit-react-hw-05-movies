import { getCastMovie } from 'api/moviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const defaultFoto =
  'https://place-hold.it/200x300/ffffff/000/e3e3e3&text=no_photo';

const Cast = () => {
  const [cast, setCast] = useState({});
  const { movieId } = useParams('');

  const { name, profile_path } = cast;

//   console.log(cast);

  useEffect(() => {
    getCastMovie(movieId).then(({ data: { cast } }) => {
      // console.log(cast);
      setCast(cast);
    });
  }, [movieId]);

  return (
    <>
      {cast.length > 0 &&
        cast.map(({ name, profile_path, id }) => (
          <div className={css.card} key={id}>
            <div className={css.profileWrapper}>
              <img
                src={profile_path ? BASE_URL + profile_path : defaultFoto}
                alt={name}
              />
            </div>
            <p>{name}</p>
          </div>
        ))}
    </>
  );
};

export default Cast;
