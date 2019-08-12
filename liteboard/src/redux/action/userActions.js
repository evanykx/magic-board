import * as actionTypes from '../constant/actionTypes';

export const login = (payload) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.USER_LOGIN,
            data: payload,
        });
    };
};