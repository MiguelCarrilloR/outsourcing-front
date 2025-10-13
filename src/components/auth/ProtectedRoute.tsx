import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './session';

export default function ProtectedRoute({ children }: { children: React.ReactElement }) {
  return isAuthenticated() ? children : <Navigate to="/" replace />;
}
