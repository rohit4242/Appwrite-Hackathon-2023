const initialState = {
    menuHeaderOpened: false,
    menuAccountOpened: false
  };
  
  const menusReducer = (state, action) => {
    switch (action.type) {
      case 'OPEN_MENU_HEADER':
        return { ...state, menuHeaderOpened: true };
      case 'CLOSE_MENU_HEADER':
        return { ...state, menuHeaderOpened: false };
      case 'OPEN_MENU_ACCOUNT':
        return { ...state, menuAccountOpened: true };
      case 'CLOSE_MENU_ACCOUNT':
        return { ...state, menuAccountOpened: false };
      default:
        return state;
    }
  };
  
  export { initialState, menusReducer };
  