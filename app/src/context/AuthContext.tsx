import { createContext, useContext, useState } from 'react';

interface AuthContextData {
  userName: string;
  setUserName: (name: string) => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userName, setUserName] = useState('');

  return (
    <AuthContext.Provider value={{ userName, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
