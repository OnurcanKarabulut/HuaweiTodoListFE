import * as ActionTypes from '../ActionType';

export function change(value) {
    return {
        type: "change",
        data: value
    };
}

export function setUser(value) {
    return {
        type: ActionTypes.SET_USER,
        data: value
    }

}

export function setUserLists(value) {
    return {
        type: ActionTypes.SET_USER_LISTS,
        data: value
    }
}