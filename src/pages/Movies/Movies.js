import { getSearchMovie } from 'api/moviesApi';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  console.log(movies);

  useEffect(() => {
    if (!inputValue) return;

    getSearchMovie(inputValue).then(({ data: { results } }) => {
      try {
        if (results.length === 0) {
          alert('nothing found');
          return;
        }
        setMovies(results);
      } catch {
        alert('Movies loading error.');
      }
    });
  }, [inputValue]);

  const onFormSubmit = event => {
    event.preventDefault();

    const { value } = event.target.elements.movie;

    if (value.trim() === '') {
      alert('Enter movie title.');
      return;
    }

    // console.log(value);
    setInputValue(value.trim());
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
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
