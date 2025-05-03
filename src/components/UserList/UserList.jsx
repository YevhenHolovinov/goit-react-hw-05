import { Link, useLocation } from 'react-router-dom';
import css from './UserList.module.css';

export default function UserList({ users }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {users.map((user) => (
        <li key={user.id} className={css.listItem}>
          <h3 className={css.username}>
            {user.firstName} {user.lastName}
          </h3>
          <p className={css.text}>{user.email}</p>
          <p className={css.text}>{user.phone}</p>
          <p className={css.text}>{user.age} yers</p>
          <Link
            to={`/dashboard/${user.id}`}
            className={css.link}
            state={location}
          >
            Details
          </Link>
        </li>
      ))}
    </ul>
  );
}
