import React, { createContext, useReducer } from 'react';
import { initialState, menusReducer } from './MenusReducer';

const MenusContext = createContext();

const MenusContextProvider = (props) => {
  const [state, dispatch] = useReducer(menusReducer, initialState);

  return (
    <MenusContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MenusContext.Provider>
  );
};

export { MenusContext, MenusContextProvider };
