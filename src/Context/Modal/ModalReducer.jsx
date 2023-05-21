const initialState = {
    modalCreateTaskOpen: false
  };
  
  const modalReducer = (state, action) => {
    switch (action.type) {
      case 'OPEN_MODAL_CREATE_TASK':
        return { ...state, modalCreateTaskOpen: true };
      case 'CLOSE_MODAL_CREATE_TASK':
        return { ...state, modalCreateTaskOpen: false };
      default:
        return state;
    }
  };
  
  export { initialState, modalReducer };
  