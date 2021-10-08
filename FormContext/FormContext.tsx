import { createContext } from 'react';

const MyFormContext = createContext(null);

export function ContextForm({ children }) {
  return <MyFormContext.Provider value={{}}>{children}</MyFormContext.Provider>;
}

export default MyFormContext;
