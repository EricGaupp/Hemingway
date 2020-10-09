import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { authContext, IUserDetails } from "./hooks/useAuth";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";
import "./styles/tailwind.css";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

const authPromise =
  process.env.NODE_ENV === "development"
    ? new Promise<IUserDetails | null>((resolve) => {
        resolve(null);
      })
    : fetch("/.auth/me").then((res) => res.json());

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUserDetails>({
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

  useEffect(() => {
    authPromise.then((authData: IUserDetails) => {
      if (authData?.userId) {
        console.log("found user id");
        setUser(authData);
        setAuthenticated(true);
      }
    });
  }, []);
  return (
    <authContext.Provider
      value={{ authenticated, user, fakeSignIn, fakeSignOut }}
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
