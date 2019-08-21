import * as ActionTypes from "../ActionType";

export function setListName(value) {
    return {
        type: ActionTypes.SET_LIST,
        data: value
    }

}

export function deleteList(value) {
    return {
        type: ActionTypes.DELETE_LIST,
        data: value
    }

}

export function setUserLists(value) {
    return {
        type: ActionTypes.SET_USER_LISTS,
        data: value
    }
}