import {connect} from "react-redux";

import Todolistslist from "../Component/ToDoListsList";
import * as TodoListAction from "../Action/TodoListAction";


const mapStateToProps = (state, ownProps) => {
    return {
        todolists: state.TodoLists.todolists,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteList: value => {
            dispatch(TodoListAction.deleteList(value));
        }

    };
};

const TodoListListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todolistslist);

export default TodoListListContainer;