import {connect} from "react-redux";

import UserToDoLists from "../Component/UserToDoLists";
import * as TodoListAction from "../Action/TodoListAction";



const mapStateToProps = (state, ownProps) => {
    return {
        username: state.Login.username,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        setUserLists: value =>{
            dispatch(TodoListAction.setUserLists(value));
        }


    };
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserToDoLists);

export default LoginContainer;