import { useEffect, useState } from 'react';
import { fetchUser } from '../userService';
import { useSearchParams } from 'react-router-dom';
import UserList from '../components/UserList/UserList';
import { useDebounce } from 'use-debounce';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const [debounceQuery] = useDebounce(query, 300);

  const changeSearchText = (event) => {
    const nextParams = new URLSearchParams(searchParams);
    if (event.target.value !== '') {
      nextParams.set('query', event.target.value);
    } else {
      nextParams.delete('query');
    }

    setSearchParams(nextParams);
  };

  // useEffect(() => {}, []);

  useEffect(() => {
    async function getUsers() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchUser(debounceQuery);
        setUsers(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getUsers();
  }, [debounceQuery]);

  return (
    <div>
      <input type="text" value={query} onChange={changeSearchText} />
      {isLoading && <b> Loading users......</b>}
      {error && <b>Whooops there was an error, plz reload the page...</b>}
      {users.length > 0 && <UserList users={users} />}
    </div>
  );
}
