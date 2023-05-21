import React, { createContext, useReducer } from 'react';
import { initialState, tasksReducer } from './TasksReducer';

const TasksContext = createContext();

const TasksContextProvider = (props) => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksContextProvider };
