import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Layout from './Layout';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Results from './pages/Results';
import Attendance from './pages/Attendance';
import Login from './Components/AuthComponents/Login';
import Signup from './Components/AuthComponents/Signup';
import NotFound from './pages/404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    element: <ProtectedRoute><Layout /></ProtectedRoute>,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/courses', element: <Courses /> },
      { path: '/results', element: <Results /> },
      { path: '/attendance', element: <Attendance /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;