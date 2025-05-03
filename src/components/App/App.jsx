import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import AppHeader from '../AppHeader/AppHeader';

const HomePage = lazy(() => import('../../pages/HomePage'));
const UsersPage = lazy(() => import('../../pages/UsersPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
const UserDetailsPage = lazy(() => import('../../pages/UserDetailsPage'));
const UserPosts = lazy(() => import('../UserPosts/UserPosts'));
const UserTodos = lazy(() => import('../UserTodos/UserTodos'));

import css from './App.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <AppHeader />
      <Suspense fallback={<b>Loading page.....</b>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<UsersPage />} />
          <Route path="/dashboard/:userId" element={<UserDetailsPage />}>
            <Route path="posts" element={<UserPosts />} />
            <Route path="todos" element={<UserTodos />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
