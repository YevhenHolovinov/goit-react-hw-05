import AppHeader from '../AppHeader/AppHeader'
import HomePage from '../../pages/HomePage'
import UsersPage from '../../pages/UsersPage'
import { Route, Routes} from 'react-router-dom';
import css from './App.module.css';
import NotFoundPage from '../../pages/NotFoundPage';

export default function App  ()  {
  return (
    <div className={css.container}>
      <AppHeader /> 
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/dashboard' element={<UsersPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
};