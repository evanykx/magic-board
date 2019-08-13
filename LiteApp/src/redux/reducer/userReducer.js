import * as actionTypes from "../constant/actionTypes";

// 用户相关动作处理
export const user = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return action.data;
    default:
      return state;
  }
};
