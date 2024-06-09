import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from '../../api/firebase';

const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  useEffect(() => {
    onUserStateChange((user) => {
      try {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
      } catch (err) {
        console.log(err);
      }
    });
  }, []);

  const [user, setUser] = useState(() => readUsersFromStorage());

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
function readUsersFromStorage() {
  const userData = localStorage.getItem('user');
  try {
    return userData ? JSON.parse(userData) : null;
  } catch (err) {
    console.log(err);
  }
}

export function useAuthContext() {
  return useContext(AuthContext);
}
