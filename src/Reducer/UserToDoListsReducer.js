import * as ActionTypes from '../ActionType';

const initialState = {
    username: "",
    todolists: []
};
const Main = (state = initialState, action) => {
    switch (action.type) {

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