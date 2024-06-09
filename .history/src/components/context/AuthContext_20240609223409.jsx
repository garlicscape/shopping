import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from '../../api/firebase';

const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(() => readUsersFromStorage());

  if (user) {
    useEffect(() => {
      onUserStateChange((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
      });
    }, []);
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  }
}
function readUsersFromStorage() {
  const userData = localStorage.getItem('user');
  return userData ? JSON.parse(userData) : null;
}

export function useAuthContext() {
  return useContext(AuthContext);
}