import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // Adjusted path

interface ProtectedRouteProps {
  children?: React.ReactNode; // Allow wrapping a component directly or using Outlet
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { session, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // You might want to show a loading spinner here
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Loading session...</div>
      </div>
    );
  }

  if (!session) {
    // User is not authenticated, redirect to login page
    // Pass the current location to redirect back after login (optional)
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // User is authenticated, render the child components
  // Outlet is used if this is a layout route, children if it's wrapping a specific component
  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
