import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendList } from '../../api/moviesApi';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  // console.log('home', location);

  // console.log(location.pathname);

  useEffect(() => {
    getTrendList().then(({ data: { results } }) => setMovies(results));
  }, []);

  //   getTrendList().then(data => {console.log(data)});
  //   getTrendList().then(data => {console.log(data.data)});
  //   getTrendList().then(data => {console.log(data.data.results)});

  return (
    <>
      <div>Trending today</div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location}}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
