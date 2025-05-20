import { NavLink } from 'react-router-dom';
import css from './SubNavigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function SubNavigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="cast" className={buildLinkClass}>
        Cast
      </NavLink>
      <NavLink to="reviews" className={buildLinkClass}>
        Reviews
      </NavLink>
    </nav>
  );
}
