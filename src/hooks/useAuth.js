// src/hooks/useAuth.js
import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

export const useAuth = () => {
  return useContext(AuthContext);
};
