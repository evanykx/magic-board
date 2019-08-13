import { combineReducers } from "redux";

import { user } from "./userReducer";

export const appRouter = combineReducers({
  user: user
});
