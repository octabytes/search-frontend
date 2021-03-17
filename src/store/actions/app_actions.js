import store from "../store";

import { LOAD_SEARCH_DATA } from "../reducers/app_reducer";

const loadSearchData = (data) => {
  store.dispatch({
    type: LOAD_SEARCH_DATA,
    data,
  });
};

const AppActions = { loadSearchData };

export default AppActions;
