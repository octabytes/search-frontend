import store from "../store";

import {
  LOAD_SEARCH_DATA,
  APP_SELECT_LANGUAGE,
  SET_SEARCH_LOADING,
} from "../reducers/app_reducer";

const loadSearchData = (data) => {
  store.dispatch({
    type: LOAD_SEARCH_DATA,
    data,
  });
};

const selectLanguage = (language) => {
  store.dispatch({
    type: APP_SELECT_LANGUAGE,
    language: language,
  });
};

const setLoading = (loading) => {
  store.dispatch({
    type: SET_SEARCH_LOADING,
    loading,
  });
};

const AppActions = { loadSearchData, selectLanguage, setLoading };

export default AppActions;
