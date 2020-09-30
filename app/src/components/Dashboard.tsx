import React, { useEffect, useState } from "react";

interface IUser {
  identityProvider: string;
  userId: string;
  userDetails: string;
  userRoles: string[];
}

const Dashboard = () => {
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    const fetchAuth = async () => {
      const response = await fetch("/.auth/me");
      const payload = await response.json();
      const { clientPrincipal } = payload;
      setUser(clientPrincipal);
    };
    fetchAuth();
  }, []);

  return (
    <div>
      <h3>Homepage</h3>
      {user?.userId ? (
        <h5>Authenticated: {user.userId}</h5>
      ) : (
        <h5>Unauthenticated</h5>
      )}
    </div>
  );
};

export default Dashboard;
