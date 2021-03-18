import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import store from "store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </Provider>,
  document.getElementById("root")
);
