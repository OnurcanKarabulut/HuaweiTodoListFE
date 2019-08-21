import {connect} from "react-redux";

import Login from "../Component/Login";
import * as LoginAction from "../Action/LoginAction";

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        setUser: value => {
            dispatch(LoginAction.setUser(value));
        },
        setUserLists: value =>{
            dispatch(LoginAction.setUserLists(value));
        }
    };
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LoginContainer;