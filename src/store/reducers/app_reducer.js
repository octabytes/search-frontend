export const LOAD_SEARCH_DATA = "LOAD_SEARCH_DATA";
export const APP_SELECT_LANGUAGE = "APP_SELECT_LANGUAGE";
export const SET_SEARCH_LOADING = "SET_SEARCH_LOADING";

const initialState = {
  loading: false,
  language: "english",
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_LOADING:
      return { ...state, loading: action.loading };
    case APP_SELECT_LANGUAGE:
      return { ...state, language: action.language };
    case LOAD_SEARCH_DATA:
      return { ...state, search: action.data };
    default:
      return { ...state };
  }
};

export default AppReducer;
