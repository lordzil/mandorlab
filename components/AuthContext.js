import React, { createContext, useContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(['user_jwt'])
  const [user, setUser] = useState({ isAuth: false, username: null });

  useEffect(() => {
    const token = cookies.user_jwt;
    if (token) {
      // Validate the token on the server-side or using a library like jwt-decode
      //const isValid = validateToken(token);
      const tokenPayload = jwtDecode(token)

      if (tokenPayload) {
        setUser({ isAuth: true, username: tokenPayload.sub });
      } else {
        // Token is invalid, remove it
        removeCookie('user_jwt');
        setUser({ isAuth: false, username: null });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = (jwtToken) => {
    // Set the JWT cookie
    const tokenPayload = jwtDecode(jwtToken)
    console.log(jwtToken)
    setCookie('user_jwt', jwtToken, { path: '/', maxAge: 36000 }); // Adjust maxAge accordingly
    setUser({ isAuth: true , username: tokenPayload.sub });
    console.log('loggend in')
  };

  const logout = () => {
    // Remove the JWT cookie
    console.log("logging out")
    removeCookie('user_jwt');
    setUser({ isAuth: false, username: null });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}