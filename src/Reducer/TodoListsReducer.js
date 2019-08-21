
import * as ActionTypes from '../ActionType';

const initialState = {
    id : '',
    listname: "",
    todolists : []
};

const TodoListReducer = (state = initialState, action) => {
    switch (action.type) {
          case ActionTypes.SET_LIST:
            return {
                ...state,
                listname: action.data
            };
        case ActionTypes.SET_USER_LISTS:
            return {
                ...state,
                todolists: action.data
            };
        case ActionTypes.DELETE_LIST:
            return {
                ...state,
                id: action.data,
                todolists: state.todolists.filter(todolist => action.data !== todolist.id),
            };
        default:
            return state;
    }
};
export default TodoListReducer;