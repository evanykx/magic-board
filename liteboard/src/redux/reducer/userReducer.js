import * as actionTypes from '../constant/actionTypes';

const initState = {
    msg: null
}

export const user = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            if (action.data.username && action.data.username === 'evan') {
                if (action.data.password && action.data.password === '1234') {
                    return {
                        username: action.data.username,
                        rememberme: action.data.rememberme,
                        ...state
                    };
                } else {
                    return {
                        ...state,
                        msg: 'Password is incorrect!'
                    };
                }
            } else {
                return {
                    ...state,
                    msg: 'Username is not exists!'
                };
            }
        default:
            return state;
    }
};