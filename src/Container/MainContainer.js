import {connect} from "react-redux";

import Main from "../Component/Main";
import * as MainAction from "../Action/MainAction";


const mapStateToProps = (state, ownProps) => {
    return {
        username: state.Login.username,
        comment: state.Main.comment,
        listname : state.TodoLists.listname
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setToDoItems: value => {
            dispatch(MainAction.setToDoItems(value));
        }


    };
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default LoginContainer;