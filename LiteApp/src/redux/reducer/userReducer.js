import * as actionTypes from "../constant/actionTypes";

export const user = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return action.data;
    default:
      return state;
  }
};
