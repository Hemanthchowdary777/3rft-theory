import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { account } from "../lib/appwrite";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function checkLogin() {
      try {
        await account.get();
        setLoggedIn(true);
      } catch (err) {
        setLoggedIn(false);
      } finally {
        setLoading(false);
      }
    }

    checkLogin();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Checking Login...
      </div>
    );
  }

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;