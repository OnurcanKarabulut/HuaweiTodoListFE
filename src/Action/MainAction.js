import * as ActionTypes from '../ActionType';


export function setToDoItems(value) {
    return {
        type: ActionTypes.LIST_TODO_ITEMS,
        data: value
    }
}