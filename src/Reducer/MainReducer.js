import * as ActionTypes from '../ActionType';

const initialState = {
    username: "",
    todoitems: [],

};
const Main = (state = initialState, action) => {
    switch (action.type) {
        case "change":
            return {
                ...state,
                comment: action.data,
            };


        case ActionTypes.LIST_TODO_ITEMS:
            return {
                ...state,
                todoitems: action.data,
            };


        default:
            return state;
    }

};
export default Main;