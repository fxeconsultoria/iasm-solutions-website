import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // Adjusted path

const AuthCallbackPage: React.FC = () => {
  const navigate = useNavigate();
  const { session, isLoading } = useAuth();

  useEffect(() => {
    // This page is hit after Supabase redirects back to the app.
    // The AuthContext's onAuthStateChange listener should handle setting the session.
    // We wait for loading to complete to ensure session info is up-to-date.
    if (!isLoading) {
      if (session) {
        navigate('/dashboard'); // Or any other appropriate logged-in page
      } else {
        // If no session, maybe redirect to login or show an error
        navigate('/login?message=auth_callback_error');
      }
    }
  }, [session, isLoading, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">Processing authentication...</h1>
        {/* You could add a spinner here */}
        <p>Please wait while we verify your session.</p>
      </div>
    </div>
  );
};

export default AuthCallbackPage;
