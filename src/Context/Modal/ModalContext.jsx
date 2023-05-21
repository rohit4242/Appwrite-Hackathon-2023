import React, { createContext, useReducer } from 'react';
import { initialState, modalReducer } from './ModalReducer';

const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalContextProvider };
