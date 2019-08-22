import React, {Component} from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";


class todoitems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            todo: '',
            cost: '',
            date: '',

        }
    }

    onDeleteUser = (id) => {
        const {deleteuser} = this.props;
        var apiBaseUrl = "http://localhost:8080/todo/";
        var payload = {
            "id": this.props.id
        };
        axios.delete(apiBaseUrl + 'deleteToDoItem',{ data: payload })
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    console.log("silindi");
                    deleteuser(id);
                }
            })

    };

    render() {
        const {id, todo, cost, date} = this.props;
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
                        <label>Cost:
                            <TextField
                                hintText="cost"
                                floatingLabelText="cost"
                                value={cost}
                            />
                        </label>
                        <br></br>
                        <label>Deadline:
                            <TextField
                                id="datetime-local"
                                label="Next appointment"
                                type="datetime-local"

                                value={date}
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