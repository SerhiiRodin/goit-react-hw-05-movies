import { getSearchMovie } from 'api/moviesApi';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  // const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const inputValue = searchParams.get('input' ?? '');

  const location = useLocation();
  // console.log('Movies', location);

  useEffect(() => {
    if (!inputValue) return;

    getSearchMovie(inputValue).then(({ data: { results } }) => {
      try {
        if (results.length === 0) {
          alert('nothing found');
          setSearchParams({ input: '' });
          //Если набрали плохой запрос, то убирается этот запрос из URL input="ыаысы"
          setSearchParams({});
          setMovies([]);
          return;
        }
        setMovies(results);
      } catch {
        alert('Movies loading error.');
      }
    });
  }, [inputValue, setSearchParams]);

  const onFormSubmit = event => {
    event.preventDefault();

    const { value } = event.target.elements.movie;

    if (value.trim() === '') {
      alert('Enter movie title.');

      setSearchParams({});
      return;
    }

    // console.log(value);
    // setInputValue(value.trim());

    setSearchParams({ input: value.trim() });

    event.target.reset();
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          name="movie"
          type="text"
          placeholder="Search movie"
          autoFocus
          // value={inputValue}
        />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
