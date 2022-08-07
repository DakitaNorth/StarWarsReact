import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "@store/store";

import ThemeProvider from "@context/ThemeProvider";

import App from "@containers/App/App";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);