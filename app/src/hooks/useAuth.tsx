import React, { createContext, useEffect, useState, useContext } from "react";

type AuthContextProps = {
  user: IUserDetails | null;
  fetching: boolean;
  fakeSignIn: () => void;
};

type IUserDetails = {
  identityProvider: string;
  userId: string;
  userDetails: string;
  userRoles: string[];
};

const authContext = createContext<Partial<AuthContextProps>>({});

const useProvideAuth = () => {
  const [user, setUser] = useState<IUserDetails>({
    identityProvider: "",
    userId: "",
    userDetails: "",
    userRoles: [],
  });
  const [fetching, setFetching] = useState(false);

  const fakeSignIn = () => {
    setUser({
      userId: "1",
      userDetails: "Eric.Gaupp@FakeAuth.com",
      identityProvider: "FakeAuth",
      userRoles: ["Fake Role"],
    });
  };

  useEffect(() => {
    const fetchAuth = async () => {
      setFetching(true);
      const response = await fetch("/.auth/me");
      const payload = await response.json();
      const { clientPrincipal } = payload;
      setUser(clientPrincipal);
      setFetching(false);
    };
    if (process.env.NODE_ENV !== "development") fetchAuth();
  }, []);

  return {
    user,
    fetching,
    fakeSignIn,
  };
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useProvideAuth();
  if (auth.fetching) return null;
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};
