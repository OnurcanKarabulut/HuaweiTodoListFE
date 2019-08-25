import React, {Component} from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    }

    handleClick(event) {
        var apiBaseUrl = "https://huaweitodobe.herokuapp.com/user/";
        // console.log("values in register handler",role);
        var self = this;
        //To be done:check for empty values before hitting submit
        if (this.state.first_name.length > 0 && this.state.last_name.length > 0 && this.state.password.length > 0) {
            console.log("burda");
            var payload = {
                "first_name": this.state.first_name,
                "last_name": this.state.last_name,

                "password": this.state.password,

            };
            const {history} = this.props;
            console.log(this.state.first_name);
            axios.post(apiBaseUrl + 'signup', payload)
                .then(function (response) {
                    console.log(response);
                    if (response.status == 200) {
                        history.push('/');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        } else {
            alert("Input field value is missing");
        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Register"
                        />
                        <TextField
                            hintText="Enter your First Name"
                            floatingLabelText="First Name"
                            onChange={(event, newValue) => this.setState({first_name: newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Last Name"
                            floatingLabelText="Last Name"
                            onChange={(event, newValue) => this.setState({last_name: newValue})}
                        />
                        <br/>

                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.setState({password: newValue})}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style}
                                      onClick={(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default Register;