import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { setLocalStorage } from "@utils/localStorage";

import rootReducer from "./reducers/index";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
    setLocalStorage("store", store.getState().favoriteReducer);
});

export default store;