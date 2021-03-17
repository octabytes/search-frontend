export const LOAD_SEARCH_DATA = "LOAD_SEARCH_DATA";

const initialState = {};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SEARCH_DATA:
      return { ...state, search: action.data };
    default:
      return { ...state };
  }
};

export default AppReducer;
