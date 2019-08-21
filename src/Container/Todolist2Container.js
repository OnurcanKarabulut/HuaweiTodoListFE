import {connect} from "react-redux";

import Todolist2 from "../Component/Todolist2";
import * as TodoListAction from "../Action/TodoListAction";


const mapStateToProps = (state, ownProps) => {
    return {
        todolists: state.TodoLists.todolists,
    };
};

const mapDispatchToProps = dispatch => {
    return {

        setListName: value => {
            dispatch(TodoListAction.setListName(value));
        },
        deleteList: value => {
            dispatch(TodoListAction.deleteList(value));
        }


    };
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todolist2);

export default LoginContainer;