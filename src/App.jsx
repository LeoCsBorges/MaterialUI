import { Route, Routes } from 'react-router';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css'

function AppRouters() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouters;
