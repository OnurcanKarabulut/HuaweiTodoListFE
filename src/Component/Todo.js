import React, {Component} from 'react'
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from '@material-ui/core/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import AppBar from "material-ui/AppBar";



class todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            todo: '',
            cost: '',
            date: new Date(),

        }
    }

    onChange = date => this.setState({date});

    handleClick(event) {
        var apiBaseUrl = "http://localhost:8080/todo/";
        var self = this;
        console.log(this.props.TodoUsername);
        const {history} = this.props;
        var payload = {
            "listname": this.props.TodoListname,
            "todo": this.state.todo,
            "cost": this.state.cost,
            "date": this.state.date,
            "username" : this.state.username,

        };
        axios.post(apiBaseUrl + 'addtodo', payload)
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    console.log("kaydedildi");
                history.push('main');

                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        return (
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title={"Add Todo Items"}
                    />
                    <Card style={cardStyle}>
                        <label>Name:
                            <TextField

                                hintText="title"
                                floatingLabelText="TODO"
                                onChange={(event, newValue) => this.setState({todo: newValue})}
                            />
                        </label>
                        <br></br>
                        <label>Cost:
                            <TextField
                                hintText="cost"
                                floatingLabelText="cost"
                                onChange={(event, newValue) => this.setState({cost: newValue})}
                            />
                        </label>
                        <br></br>
                        <label>Deadline:
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue="2017-05-24"
                                onChange={(event, newValue) => this.setState({date: newValue})}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </label>
                        <br></br>
                        <label>Completed:
                            <Checkbox
                                label="Multiline"
                                value=''
                                color="primary"
                                inputProps={{
                                    'aria-label': 'secondary checkbox',
                                }}
                            />
                        </label>
                        <br/>


                        <RaisedButton label="ADD" primary={true} style={style}
                                      onClick={(event) => this.handleClick(event)}/>

                    </Card>
                </MuiThemeProvider>

            </div>
        )
    }
}

const style = {
    margin: 20,
};

var cardStyle = {
    margin: 10,
    width: '30vw',
    height: '20vw'
};

export default todo;