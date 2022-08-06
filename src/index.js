import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import { Provider } from "react-redux";

import store from "@store/store";

import App from "@containers/App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);