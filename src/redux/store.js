import reducer from "./reducers"

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [logger, thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)
    )
);

store.subscribe(() => {
    localStorage.setItem('movies', JSON.stringify(store.getState().movies));
    console.log(store.getState());
});

export default store;