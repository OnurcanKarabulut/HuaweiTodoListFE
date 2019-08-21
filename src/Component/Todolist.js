import React, {Component} from 'react';
import ToDoİtems from '../Component/TodoItems';
import {Input} from 'mdbreact';
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
                <Input label="Search TodoItem" icon="search" onChange={this.onchange}/>
                {

                    filteredItems.map(item => {
                        return (

                            <ToDoİtems deleteuser={this.props.deleteUser}
                                       id={item.id}
                                       key={item.id}
                                       todo={item.todo}
                                       cost={item.cost}
                                       date={item.date}
                            />
                        )

                    })
                }
            </div>

        );
    }
}

export default Todolist;