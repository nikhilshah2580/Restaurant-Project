import { useMemo, useState } from "react";
import { AuthContext } from "./authStore";

const STORAGE_KEY = "momo_user";
const USERS_STORAGE_KEY = "momo_users";

const getSavedUsers = () => {
  const savedUsers = localStorage.getItem(USERS_STORAGE_KEY);
  return savedUsers ? JSON.parse(savedUsers) : [];
};

const saveUsers = (users) => {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem(STORAGE_KEY);
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = ({ email, password }) => {
    const users = getSavedUsers();
    const existingUser = users.find(
      (savedUser) => savedUser.email.toLowerCase() === email.toLowerCase(),
    );

    if (!existingUser || existingUser.password !== password) {
      return {
        ok: false,
        message: "Email or password is incorrect.",
      };
    }

    const authUser = {
      email: existingUser.email,
      name: existingUser.name,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(authUser));
    setUser(authUser);

    return {
      ok: true,
    };
  };

  const register = ({ email, name, password }) => {
    const users = getSavedUsers();
    const userExists = users.some(
      (savedUser) => savedUser.email.toLowerCase() === email.toLowerCase(),
    );

    if (userExists) {
      return {
        ok: false,
        message: "An account with this email already exists.",
      };
    }

    const newUser = {
      email,
      name,
      password,
    };
    const authUser = {
      email,
      name,
    };

    saveUsers([...users, newUser]);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(authUser));
    setUser(authUser);

    return {
      ok: true,
    };
  };

  const loginWithGoogle = () => {
    const authUser = {
      email: "google.user@momos.local",
      name: "Google User",
      provider: "google",
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(authUser));
    setUser(authUser);

    return {
      ok: true,
    };
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      register,
      loginWithGoogle,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
