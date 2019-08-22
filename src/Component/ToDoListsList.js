import React, {Component} from 'react'
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from '@material-ui/core/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import AppBar from "material-ui/AppBar";


class TodoListsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listname: '',
        }
    }

    list(){
        console.log(this.props);
        this.props.setListName(this.props.listname);
        this.props.history.push('main');
    }
    onDeleteList  (id) {
        const {deleteList} = this.props;
        var apiBaseUrl = "http://localhost:8080/todo/";
        var payload = {
           "id": this.props.id
        };
        axios.delete(apiBaseUrl + 'deleteList',{ data: payload })
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    console.log("silindi");
                    deleteList(id);
                }
            })
    };

    render() {
        const {id,listname} = this.props;
        return (
            <div>
                <MuiThemeProvider>

                    <Card style={cardStyle}>
                        <label>Name:
                            <TextField

                                hintText="title"
                                floatingLabelText="ListName"
                                value = {listname}
                            />
                        </label>
                        <br></br>


                        <RaisedButton label="ShowItems" primary={true} style={style}
                                      onClick={() => this.list()}/>
                        <RaisedButton label="Delete List" primary={true} style={style}
                                      onClick={(event) => this.onDeleteList(id)}/>
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
    width: '20vw',
    height: '15vw'
};

export default TodoListsList;