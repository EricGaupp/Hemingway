import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { authContext, AuthResponse, UserDetails } from "./hooks/useAuth";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";
import "./styles/tailwind.css";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

const authPromise: Promise<AuthResponse> =
  process.env.NODE_ENV === "development"
    ? new Promise((resolve) => {
        resolve({ clientPrincipal: null });
      })
    : fetch("/.auth/me").then((res) => res.json());

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(true);
  const [user, setUser] = useState<UserDetails | null>({
    userId: "",
    userDetails: "",
    identityProvider: "",
    userRoles: [],
  });

  function fakeSignIn() {
    setUser({
      userId: "1",
      userDetails: "Eric.Gaupp@FakeAuth.com",
      identityProvider: "FakeAuth",
      userRoles: ["Fake Role"],
    });
    setAuthenticated(true);
    setFetching(false);
  }

  function fakeSignOut() {
    setUser({
      userId: "",
      userDetails: "",
      identityProvider: "",
      userRoles: [],
    });
    setAuthenticated(false);
  }

  const fetchAuth = async (authData: Promise<AuthResponse>) => {
    setFetching(true);
    const response = await authData;
    const { clientPrincipal } = response;
    //Authenticate via proper role
    setUser(clientPrincipal);
    if (clientPrincipal?.userRoles.includes("user")) {
      setAuthenticated(true);
    }
    setFetching(false);
  };

  useEffect(() => {
    fetchAuth(authPromise);
  }, []);

  return (
    <authContext.Provider
      value={{ authenticated, fetching, user, fakeSignIn, fakeSignOut }}
    >
      {children}
    </authContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
