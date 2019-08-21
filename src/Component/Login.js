import React, {Component} from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleClick = (event) => {
        var apiBaseUrl = "http://localhost:8080/user/";
        var self = this;
        var payload = {
            "userId": this.state.username,
            "password": this.state.password,
        };
        const {username} = this.state;
        console.log(this.props);
        const {history, setUser,setUserLists} = this.props;
        axios.post(apiBaseUrl + 'login', payload)
            .then(function (response) {
                console.log(response);
                if (response.data == true) {
                    console.log("Login successfull");
                    setUser(username);
                    axios.get(apiBaseUrl + 'findtodolists' +'/' + username)
                        .then(function (response) {
                            setUserLists(response.data)
                        })
                    history.push('usertodolists');

                } else if (response.data == false) {
                    console.log("Username password do not match");
                    alert(response.data.success)
                } else {
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    register = (event) => {
        this.props.history.push('register');
    };

    render() {
        return (

            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Login"
                        />
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={(event, newValue) => this.setState({username: newValue})}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.setState({password: newValue})}
                        />
                        <br/>
                        <RaisedButton label="Login" primary={true} style={style}
                                      onClick={(event) => this.handleClick(event)}/>

                        <RaisedButton label="Register" primary={true} style={style}
                                      onClick={(event) => this.register(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}


const style = {
    margin: 15,
};
export default Login;