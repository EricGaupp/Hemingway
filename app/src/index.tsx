import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { authContext, fetchUserAuth } from "./hooks/useAuth";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";
import "./styles/tailwind.css";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

const resource = fetchUserAuth();

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = resource.auth.read();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<h1>Fetching auth...</h1>}>
        <AuthProvider>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
