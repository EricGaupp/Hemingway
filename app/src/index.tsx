import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/tailwind.css";
import * as serviceWorker from "./serviceWorker";

// const client = new ApolloClient({
//   uri: "/api/graphql",
//   cache: new InMemoryCache(),
// });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ApolloProvider client={client}> */}
      <App />
      {/* </ApolloProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
