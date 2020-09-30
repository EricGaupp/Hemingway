import React, { createContext, useEffect, useState, useContext } from "react";

type AuthContextProps = {
  user: IUserDetails | null;
};

interface IUserDetails {
  identityProvider: string;
  userId: string;
  userDetails: string;
  userRoles: string[];
}

const authContext = createContext<Partial<AuthContextProps>>({});

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchAuth = async () => {
      const response = await fetch("/.auth/me");
      const payload = await response.json();
      const { clientPrincipal } = payload;
      setUser(clientPrincipal);
    };
    fetchAuth();
  }, []);

  return {
    user,
  };
};

export const AuthProvider = ({ children }: { children: any }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};
