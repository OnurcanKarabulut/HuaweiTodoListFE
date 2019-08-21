import {connect} from "react-redux";

import Todolist from "../Component/Todolist";
import * as TodoItemAction from "../Action/TodoItemAction";
import * as TodoListAction from "../Action/TodoListAction";


const mapStateToProps = (state, ownProps) => {
    return {
        todoitems: state.TodoItems.todoitems,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteUser: value => {
            dispatch(TodoItemAction.deleteUser(value));
        },

    };
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todolist);

export default LoginContainer;