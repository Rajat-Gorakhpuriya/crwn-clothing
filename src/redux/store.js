/** this is middleWare and use when debugging of our redux code */
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import rootReducer from "./root-reducer";

const middleWares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;