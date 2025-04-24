import { createContext, useContext, ReactNode } from 'react';
import { useAuth as useAuthHook } from '../lib/auth';
import { User, Donor, Admin } from '../types';

interface AuthContextType {
  user: User | Donor | Admin | null;
  token: string | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isDonor: boolean;
  login: (user: User | Donor | Admin, token: string) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuthHook();
  
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}