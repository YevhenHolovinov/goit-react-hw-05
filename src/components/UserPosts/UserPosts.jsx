import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchUserPosts } from '../../userService';

import css from './UserPosts.module.css';

export default function UserPosts () {
  const {userId} = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
    const data = await fetchUserPosts (userId);
      setPosts(data);
    }
    getPosts();
  }, [userId]);

  return (
    <div className={css.container}>
      <h3 className={css.header}>User Posts</h3>
      {posts.length > 0 && posts.map((post) => (
        <div key={post.id} className={css.post} >
          <h3 className={css.title}>{post.title}</h3>
          <p className={css.body}>{post.body}</p>
        </div>
      ))}
    </div>
  );
};