import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { itemsReducer } from "../services/reducers/ingredientsList";
import { ingredientInfoReducer } from "../services/reducers/ingredientInfo";
import { authChecking } from "../services/reducers/auth";
import { getUserInfo } from "../services/reducers/userInfo";
import thunk from "redux-thunk";
import { authReducer } from "../services/reducers/login";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const rootReducer = combineReducers({
  items: itemsReducer,
  info: ingredientInfoReducer,
  user: authReducer,
  auth: authChecking,
  // userRegister: getUserInfo,
});
export const store = createStore(rootReducer, enhancer);
