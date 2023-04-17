import { NavLink, Outlet } from 'react-router-dom';
import css from "./Layout.module.css"

const Layout = () => {
  return (
    <div className={css.container}>
      <nav>
        <NavLink to="/" className={css.NavLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.NavLink}>
          Movies
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
