import React, { useState, useEffect } from "react";

const Homepage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchAuth = async () => {
      const response = await fetch("/.auth/me");
      console.log(response);
      const payload = await response.json();
      const { clientPrincipal } = payload;
      setUser(clientPrincipal);
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