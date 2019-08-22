import React, {Component} from 'react';
import Todolistslist  from '../Component/ToDoListsList';
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Todolist2 extends Component {
    render() {
        const {todolists} = this.props;

        return (
            <div>
                <MuiThemeProvider>
                <AppBar
                    title={"Your ToDoList's"}
                />
                {
                    todolists.map(item => {
                        return (

                            <Todolistslist history = {this.props.history}
                                id={item.id}
                                key={item.id}
                                setListName={this.props.setListName}
                                deleteList={this.props.deleteList}
                                listname = {item.listName}
                            />
                        )

                    })
                }
                </MuiThemeProvider>
            </div>

        );
    }
}

export default Todolist2;