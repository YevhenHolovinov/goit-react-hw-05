import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import AppHeader from '../AppHeader/AppHeader';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
const MoviesDetailsPage = lazy(
  () => import('../../pages/MoviesDetailsPage/MoviesDetailsPage')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

import css from './App.module.css';
import Loader from '../Loader/Loader';

export default function App() {
  return (
    <div className={css.container}>
      <AppHeader />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
