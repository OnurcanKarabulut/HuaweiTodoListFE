import {connect} from "react-redux";

import todo from "../Component/Todo";


const mapStateToProps = (state, ownProps) => {
    return {
        TodoUsername: state.Login.username,
        TodoListname: state.TodoLists.listname

    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(todo);

export default LoginContainer;