// authContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Funciones para iniciar sesión, cerrar sesión, etc.

  const value = {
    user,
    // Otras funciones y datos relacionados con la autenticación
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

