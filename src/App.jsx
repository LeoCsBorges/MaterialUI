import './App.css'
import { Route, Routes } from 'react-router';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './components/PrivateRoute';

function AppRouters() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route 
        path='/dashboard' 
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
          }
        />

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouters;
