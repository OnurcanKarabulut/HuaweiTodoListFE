import {connect} from "react-redux";

import ToDoİtems from "../Component/TodoItems";
import * as TodoItemAction from "../Action/TodoItemAction";


const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        deleteTodoItem: value => {
            dispatch(TodoItemAction.deleteTodoItem(value));
        }

    };
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoİtems);

export default LoginContainer;