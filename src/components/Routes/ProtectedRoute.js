import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from './../../context/AuthProvider';

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  if (!user) {
    return <Navigate to='/login' replace />;
  }

  return children;
};

export default ProtectedRoute;