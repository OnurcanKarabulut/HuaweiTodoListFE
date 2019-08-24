import React, {Component} from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import axios from "axios";


class todoitems extends Component {
    constructor(props) {
        super(props);
        console.log("odoitems", this.props)
        this.state = {
            username: '',
            todo: '',
            description: '',
            date: '',
            isChecked: this.props.isChecked,
        };
        this.handleChecked = this.handleChecked.bind(this);
    }


    onDeleteUser = (id) => {
        const {deleteuser} = this.props;
        var apiBaseUrl = "http://localhost:8080/todo/";
        var payload = {
            "id": this.props.id
        };
        axios.delete(apiBaseUrl + 'deleteToDoItem', {data: payload})
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    console.log("silindi");
                    deleteuser(id);
                }
            })

    };

    handleChecked = (isChecked) => {
        var apiBaseUrl = "http://localhost:8080/todo/";
        var payload = {
            "id": this.props.id,
            "checked": isChecked,

        };
        var self = this
        axios.post(apiBaseUrl + 'updateIsCompleted', payload)
            .then(function (response) {
                console.log("---response", response);
                if (response.status == 200) {
                    console.log("güncellendi");
                    self.setState({isChecked: isChecked})
                }
            })

    };

    render() {

        const {id, todo, description, date} = this.props;

        console.log(date);
        return (
            <div>
                <MuiThemeProvider>
                    <Card style={cardStyle}>
                        <label>Name:
                            <TextField
                                hintText="title"
                                floatingLabelText="TODO"
                                value={todo}
                            />
                        </label>
                        <br></br>
                        <label>description:
                            <TextField
                                hintText="description"
                                floatingLabelText="description"
                                value={description}
                            />
                        </label>
                        <br></br>
                        <label>Deadline:
                            <TextField
                                id="date"
                                label="Birthday"
                                type="datetime"
                                defaultValue="2017-05-25T00:00:00.000+0000"
                                value={date}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </label>
                        <br></br>
                        <label>Completed:
                            <input type="checkbox" checked={this.state.isChecked} onChange={(e) => {
                                e.preventDefault();
                                this.handleChecked(!this.state.isChecked)
                            }}/>
                        </label>
                        <br/>
                        <RaisedButton label="DELETE ITEM" primary={true} onClick={(event) => this.onDeleteUser(id)}/>
                    </Card>
                </MuiThemeProvider>

            </div>
        )
    }
}


var cardStyle = {
    margin: 10,
    width: '30vw',
    height: '25vw'
};

export default todoitems;