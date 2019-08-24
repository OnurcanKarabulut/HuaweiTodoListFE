import * as ActionTypes from '../ActionType';


export function deleteTodoItem(value) {
    return {
        type: ActionTypes.DELETE_TODOITEM,
        data: value
    }
}