import React, {
  useEffect,
  useState,
  useMemo,
  createContext,
  useContext,
} from "react";
import axios from "axios";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);

  const login = async (mail, pwd) => {
    setAccessToken("hola como estas");
  }

  useEffect(() => {
    if (accessToken) console.log("Access token seteado", accessToken);
  }, [accessToken]);

  const memoedValue = useMemo(
    () => ({
      accessToken, login
    }),
    [accessToken, login]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
