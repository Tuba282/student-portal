import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Results from './pages/Results';
import DateSheet from './pages/DateSheet';
import Invoices from './pages/Invoices';
import Attendance from './pages/Attendance';
import Login from './Components/AuthComponents/Login';
import Signup from './Components/AuthComponents/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/results" element={<Results />} />
          <Route path="/date-sheet" element={<DateSheet />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/attendance" element={<Attendance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;