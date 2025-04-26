import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  user: {
    id: string;
    email: string;
    name: string;
  } | null;
  isAuthenticated: boolean;
  setCredentials: (credentials: {
    accessToken: string;
    refreshToken: string;
    user: any;
  }) => void;
  clearCredentials: () => void;
  setAccessToken: (token: string) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      user: null,
      isAuthenticated: false,
      setCredentials: (credentials) =>
        set({
          accessToken: credentials.accessToken,
          refreshToken: credentials.refreshToken,
          user: credentials.user,
          isAuthenticated: true,
        }),
      clearCredentials: () =>
        set({
          accessToken: null,
          refreshToken: null,
          user: null,
          isAuthenticated: false,
        }),
      setAccessToken: (token) => set({ accessToken: token }),
    }),
    {
      name: "auth-storage",
    }
  )
);
