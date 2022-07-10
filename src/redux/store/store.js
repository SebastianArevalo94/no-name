import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";
import { userReducer } from "../reducers/userReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducersEnviar = combineReducers({
  login: loginReducer,
  register: registerReducer,
  user: userReducer
});

export const store = createStore(
  reducersEnviar,
  composeEnhancers(applyMiddleware(thunk))
);