import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
