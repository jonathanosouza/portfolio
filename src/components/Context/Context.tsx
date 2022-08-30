import { createContext, ReactNode, useState, useCallback, useContext} from "react";

interface ContextData{
  name: string,  
  updateName(name: string): void
}

interface ContextProps {
  children: ReactNode
}

const NameContext = createContext<ContextData>({} as ContextData);

const NameProvider  = ({ children }: ContextProps) => {
  const [name, setName] = useState('Recrutier')


  const updateName = useCallback(
    (name: string) => {
      setName(name);      
    },
    [setName],
  );  


  return (
    <NameContext.Provider
      value={{
        name, updateName,
      }}
    >
      {children}
    </NameContext.Provider>
  );
};


function useName(): ContextData {
  const context = useContext(NameContext);

  if (!context) {
    throw new Error('useName must be used within an NameProvider');
  }

  return context;
}

export { NameProvider, useName };

  