import React, {Component} from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import AppBar from "material-ui/AppBar";


class Main extends Component {
    constructor(props) {
        super(props);

    }

    addItem(event) {
        const {history} = this.props;
        history.push('todo');
    }

    listItem(event) {
        var apiBaseUrl = "https://huaweitodobe.herokuapp.com/todo/";
        var self = this;
        const {listname} = this.props;
        const {setToDoItems} = this.props;
        const {history} = this.props;

        axios.get(apiBaseUrl + 'findtodoItems' + '/' + listname)
            .then(function (response) {
                console.log("isim" + listname);
                setToDoItems(response.data);
                history.push('todolist');
            })
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title={this.props.listname + "ToDoItem's"}
                    />
                    <div>
                        <RaisedButton label="Add todoItem" primary={true} style={style}
                                      onClick={(event) => this.addItem(event)}/>
                    </div>
                    <div>
                        <RaisedButton label="List todoItem" primary={true} style={style}
                                      onClick={(event) => this.listItem(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}


const style = {
    margin: 15,
};
export default Main;