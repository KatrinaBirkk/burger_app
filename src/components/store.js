import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { itemsReducer } from "../services/reducers/ingredientsList";
import { ingredientInfoReducer } from "../services/reducers/ingredientInfo";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const rootReducer = combineReducers({
  items: itemsReducer,
  info: ingredientInfoReducer,
});
export const store = createStore(rootReducer, enhancer);
