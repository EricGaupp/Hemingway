import React, { useState, useEffect } from "react";

const Homepage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchAuth = async () => {
      const response = await fetch("/.auth/me");
      console.log(response);
      const payload = await response.json();
      console.log(payload);
      const { clientPrincipal } = payload;
      const { userId } = clientPrincipal;
      setUser(userId);
    };
    fetchAuth();
  }, []);

  return (
    <div>
      <h3>Homepage</h3>
      {user ? <h5>Authenticated: {user}</h5> : <h5>Unauthenticated</h5>}
    </div>
  );
};

export default Homepage;
