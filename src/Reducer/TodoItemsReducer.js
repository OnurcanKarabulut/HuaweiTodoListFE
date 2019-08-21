import * as ActionTypes from '../ActionType';

const initialState = {

    id: '',
    todoitems: [],

};
const TodoItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "change":
            return {
                ...state,
                comment: action.data,
            };
        case ActionTypes.DELETE_USER:
            return {
                ...state,
                id: action.data,
                todoitems: state.todoitems.filter(todoitem => action.data !== todoitem.id),
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
export default TodoItemsReducer;