import * as ActionTypes from '../ActionType';


export function deleteUser(value) {
    return {
        type: ActionTypes.DELETE_USER,
        data: value
    }
}