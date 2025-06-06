import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext'; // Correct path to AuthContext
import { Button } from "@/components/ui/button";

const LogoutButton: React.FC = () => {
  const { signOut, user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogout = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut();
      // AuthContext handles session/user state update
      // No explicit navigation needed here typically, App structure handles redirects
    } catch (e: any) {
      setError(e.message || 'Failed to log out.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return null; // Don't show logout button if user is not logged in
  }

  return (
    <>
      <Button onClick={handleLogout} disabled={loading} variant="outline">
        {loading ? 'Logging Out...' : 'Log Out'}
      </Button>
      {error && <p className="text-red-500 text-sm ml-2">{error}</p>}
    </>
  );
};

export default LogoutButton;
