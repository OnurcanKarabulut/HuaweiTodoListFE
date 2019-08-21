import React, {Component} from 'react';
import Todolistslist  from '../Component/ToDoListsList';

class Todolist2 extends Component {
    render() {
        const {todolists} = this.props;

        return (
            <div>
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
            </div>

        );
    }
}

export default Todolist2;