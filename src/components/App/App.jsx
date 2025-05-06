import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import AppHeader from '../AppHeader/AppHeader';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

import css from './App.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <AppHeader />
      <Suspense fallback={<p>Loading movies....</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
