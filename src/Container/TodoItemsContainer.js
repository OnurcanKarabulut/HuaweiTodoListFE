import {connect} from "react-redux";

import ToDoİtems from "../Component/TodoItems";
import * as TodoItemAction from "../Action/TodoItemAction";


const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        deleteUser: value => {
            dispatch(TodoItemAction.deleteUser(value));
        }

    };
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoİtems);

export default LoginContainer;