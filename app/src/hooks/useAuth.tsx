import { createContext, useContext } from "react";

type AuthContextProps = {
  user: IUserDetails | null;
  authenticated: boolean;
  fakeSignIn: () => void;
};

type IUserDetails = {
  identityProvider: string;
  userId: string;
  userDetails: string;
  userRoles: string[];
};

export const authContext = createContext<Partial<AuthContextProps>>({});

export const useAuth = () => {
  return useContext(authContext);
};

export function fetchUserAuth() {
  const devPromise = new Promise<IUserDetails>((resolve) => {
    setTimeout(function () {
      resolve({
        userId: "1",
        userDetails: "Eric.Gaupp@FakeAuth.com",
        identityProvider: "FakeAuth",
        userRoles: ["Fake Role"],
      });
    }, 3000);
  });
  let authPromise: Promise<IUserDetails> =
    process.env.NODE_ENV === "development"
      ? devPromise
      : fetch("/.auth/me").then((res) => res.json());
  return { auth: wrapPromise(authPromise) };
}

function wrapPromise(promise: Promise<IUserDetails>) {
  let status = "pending";
  let result: AuthContextProps;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r
        ? {
            authenticated: true,
            user: { ...r },
            fakeSignIn() {
              this.user = {
                userId: "1",
                userDetails: "Eric.Gaupp@FakeAuth.com",
                identityProvider: "FakeAuth",
                userRoles: ["Fake Role"],
              };
            },
          }
        : {
            authenticated: false,
            user: null,
            fakeSignIn() {
              this.user = {
                userId: "1",
                userDetails: "Eric.Gaupp@FakeAuth.com",
                identityProvider: "FakeAuth",
                userRoles: ["Fake Role"],
              };
            },
          };
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else {
        return result;
      }
    },
  };
}
