import React, {Component} from 'react';
import Register from './Component/Register';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MainContainer from './Container/MainContainer';
import LoginContainer from './Container/LoginContainer';
import ToDoContainer from './Container/TodoContainer';
import TodolistContainer from './Container/TodolistContainer';
import TodoItemsContainer from './Container/TodoItemsContainer';
import UserToDoListContainer from './Container/UserToDoListContainer';
import TodoList2Container from './Container/Todolist2Container';
import TodolistslistContainer from './Container/ToDoListsListContainer';


class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (

        <div>
          <Router history={this.props.history}>
            <Route exact path='/' component={LoginContainer}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/usertodolists' component={UserToDoListContainer}></Route>
            <Route path='/todolistslist' component={TodolistslistContainer}></Route>
            <Route path='/todolists' component={TodoList2Container}></Route>
            <Route path='/main' component={MainContainer}></Route>
            <Route path='/todo' component={ToDoContainer}></Route>
            <Route path='/todolist' component={TodolistContainer}></Route>
            <Route path='/todoitems' component={TodoItemsContainer}></Route>
          </Router>
        </div>


    );
  }
}

export default App;
