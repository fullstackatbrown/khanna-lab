// CreateContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define a type for the context value
interface GlobalStateContextType {
  isAdmin: boolean;
  setAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a context
const GlobalStateContext = createContext<GlobalStateContextType | undefined>(
  undefined,
);

// Create a context provider
export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAdmin, setAdmin] = useState<boolean>(false);

  return (
    <GlobalStateContext.Provider value={{ isAdmin, setAdmin }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Export a custom hook to use the context
export const useGlobalState = (): GlobalStateContextType => {
  const context = useContext(GlobalStateContext);

  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }

  return context;
};
