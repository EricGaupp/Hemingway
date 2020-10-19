import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

type ProviderType = {
  //src=image import https://stackoverflow.com/questions/51100401/typescript-image-import
  uri: string;
  name: string;
};

const providers: ProviderType[] = [
  {
    uri: "/login/aad",
    name: "Microsoft",
  },
  {
    uri: "/login/facebook",
    name: "Facebook",
  },
  {
    uri: "/login/google",
    name: "Google",
  },
  {
    uri: "/login/twitter",
    name: "Twitter",
  },
];

const Login = () => {
  const auth = useAuth();

  if (auth.authenticated) return <Redirect to="/dashboard/home" />;
  return (
    <div className="flex-grow flex flex-col justify-center items-center bg-blue-300">
      <div className="container flex justify-center items-center mb-2">
        <h3>Please select a provider to login with:</h3>
      </div>
      <div className="w-2/3 mx-auto flex flex-col border-2 border-red-500 rounded-lg p-2">
        {providers.map((provider) => {
          return (
            <div key={provider.name} className="flex">
              <div className="flex justify-center items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt={`${provider.name} Logo`}
                />
              </div>
              <div className="flex-auto flex justify-center items-center bg-gray-400">
                <a href={`${provider.uri}?post_login_redirect_uri=/dashboard`}>
                  {provider.name}
                </a>
              </div>
            </div>
          );
        })}

        {process.env.NODE_ENV === "development" && (
          <div className="flex">
            <div className="flex justify-center items-center">
              <img src="https://via.placeholder.com/50" alt="Hemingway Logo" />
            </div>
            <div className="flex-auto flex justify-center items-center bg-gray-400">
              <button onClick={() => auth.fakeSignIn()}>Fake Login</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
