import React, {Component} from 'react';
import ToDoİtems from '../Component/TodoItems';
import Input from '@material-ui/core/Input';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";

class Todolist extends Component {
    state = {
        search : ""
    }

    onchange = e =>{
        this.setState({ search : e.target.value });
    }
    render() {
        const {todoitems} = this.props;
        const {search} = this.state;
        const filteredItems = todoitems.filter( item =>{
            return item.todo.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title={"Your ToDoItem's"}
                    />
                <Input placeholder="Search ToDoItem's" onChange={this.onchange}/>
                {

                    filteredItems.map(item => {
                        return (

                            <ToDoİtems deleteuser={this.props.deleteUser}
                                       id={item.id}
                                       key={item.id}
                                       todo={item.todo}
                                       cost={item.cost}
                                       date={item.date}
                                       isChecked={item.isChecked}
                            />
                        )

                    })
                }
                </MuiThemeProvider>
            </div>

        );
    }
}

export default Todolist;