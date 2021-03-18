import store from "../store";

import { LOAD_SEARCH_DATA, APP_SELECT_LANGUAGE } from "../reducers/app_reducer";

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

const AppActions = { loadSearchData, selectLanguage };

export default AppActions;
