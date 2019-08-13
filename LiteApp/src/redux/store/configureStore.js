import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { appRouter } from "../reducer";

// 配置thunk中间件，可以支持异步
export const configureStore = () => {
  const store = createStore(appRouter, compose(applyMiddleware(thunk)));
  return store;
};
