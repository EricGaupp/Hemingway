import { createContext, useContext } from "react";

export type AuthContextProps = {
  user: UserDetails | null;
  fetching: boolean;
  authenticated: boolean;
  fakeSignIn: () => void;
  fakeSignOut: () => void;
};

export type AuthResponse = {
  clientPrincipal: UserDetails | null;
};

export type UserDetails = {
  identityProvider: string;
  userId: string;
  userDetails: string;
  userRoles: string[];
};

export const authContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const useAuth = () => {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
