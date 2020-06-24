import { combineReducers } from "redux";
import { cakeReducer } from "./cake/cakeReducer";
import { creamReducer } from "./cream/creamReducer";
import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  cream: creamReducer,
  users: userReducer,
});
