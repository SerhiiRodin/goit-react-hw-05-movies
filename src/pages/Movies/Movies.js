import { getSearchMovie } from 'api/moviesApi';
import { useEffect, useState } from 'react';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!inputValue) return;

    getSearchMovie(inputValue).then(({ data: { results } }) => {
      console.log(results);
      setMovies(results);
    });
  }, [inputValue]);

  const onFormSubmit = event => {
    event.preventDefault();

    const { value } = event.target.elements.movie;

    if (value.trim() === '') {
      alert('Enter movie title.');
      return;
    }

    console.log(value);
    setInputValue(value.trim());
  };

  return (
    <>
      <div>Cтраница поиска фильмов по ключевому слову</div>
      <form onSubmit={onFormSubmit}>
        <input name="movie" type="text" placeholder="Search movie" />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Movies;
