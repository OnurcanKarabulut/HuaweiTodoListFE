import * as ActionTypes from '../ActionType';

const initialState = {
    username: "",
    todolists: []
};
const Main = (state = initialState, action) => {
    switch (action.type) {
        case "change":
            return {
                ...state,
                title: action.data,
            };
        case ActionTypes.SET_USER:
            return {
                ...state,
                username: action.data
            };
        case ActionTypes.SET_USER_LISTS:
            return {
                ...state,
                todolists: action.data
            };
        default:
            return state;
    }
};
export default Main;