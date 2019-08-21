import {combineReducers} from "redux";


import Login from '../Reducer/LoginReducer';
import Main from "../Reducer/MainReducer";
import TodoItems from "../Reducer/TodoItemsReducer";
import TodoLists from "../Reducer/TodoListsReducer";
import UserTodoLists from "../Reducer/UserToDoListsReducer"

const rootReducer = combineReducers({
    Login: Login,
    Main: Main,
    TodoItems: TodoItems,
    TodoLists: TodoLists,
    UserTodoLists : UserTodoLists,
});

export default rootReducer;