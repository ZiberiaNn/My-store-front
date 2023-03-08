import React, { createContext, useState } from 'react';
import { getItemFromLocal } from '../services/localStorage.service';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
    const accessToken = getItemFromLocal("accessToken");
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
  };

  const handleLogout = () => {
    setIsLogged(false);
    axios.defaults.headers.common['Authorization'] = '';
  };


  return (
    <AuthContext.Provider value={{ isLogged, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider }