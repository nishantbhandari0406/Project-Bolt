import { useState, useEffect } from 'react';
import { User, Donor, Admin } from '../types';

// Mock authentication functions for MVP
// In a real application, these would connect to a backend

const STORAGE_KEY = 'blood-donation-auth';

interface AuthData {
  user: User | Donor | Admin | null;
  token: string | null;
}

export function saveAuth(user: User | Donor | Admin, token: string) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, token }));
}

export function getAuth(): AuthData {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return { user: null, token: null };
  
  try {
    return JSON.parse(data) as AuthData;
  } catch (error) {
    console.error('Failed to parse auth data', error);
    return { user: null, token: null };
  }
}

export function clearAuth() {
  localStorage.removeItem(STORAGE_KEY);
}

export function useAuth() {
  const [authData, setAuthData] = useState<AuthData>({ user: null, token: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = getAuth();
    setAuthData(data);
    setLoading(false);
  }, []);

  const login = (user: User | Donor | Admin, token: string) => {
    saveAuth(user, token);
    setAuthData({ user, token });
  };

  const logout = () => {
    clearAuth();
    setAuthData({ user: null, token: null });
  };

  return {
    user: authData.user,
    token: authData.token,
    isAuthenticated: !!authData.token,
    isAdmin: authData.user?.role === 'admin',
    isDonor: authData.user?.role === 'donor',
    login,
    logout,
    loading,
  };
}