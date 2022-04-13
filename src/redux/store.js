import reducer from "./reducers"

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [logger, thunk];

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;