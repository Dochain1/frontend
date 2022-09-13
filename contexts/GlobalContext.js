import React, { createContext, useState } from 'react';
const initialState = {
  user: {},
};

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const storeData = (payload) => {
    setState({ ...state, user: payload });
  };

  return {
    state,
    storeData,
  };
};

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const value = useInitialState();
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
