import React, {Component} from 'react'
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from '@material-ui/core/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import {reset} from 'redux-form';
import AppBar from "material-ui/AppBar";



class usertodolists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listname: '',
        }
    }



    handleClick(event) {
        if(this.state.listname.length===0){
            alert("Liste İsmi doldurulmalıdır.!!")
        }else {
            var apiBaseUrl = "https://huaweitodobe.herokuapp.com/todo/";
            var self = this;
            console.log(this.props.username);
            var payload = {
                "username": this.props.username,
                "listname": this.state.listname,

            };
            const {username, history, setUserLists} = this.props
            axios.post(apiBaseUrl + 'createList', payload)
                .then(function (response) {
                    console.log(response);

                    if (response.data==true) {
                        alert("Aynı isimle iki liste kaydedilemez!!");

                    }else{
                        console.log("kaydedildi");
                        axios.get(apiBaseUrl + 'findtodolists' + '/' + username)
                            .then(function (response) {
                                setUserLists(response.data)

                            })
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            this.setState({listname: ''})
        }
    }
    ListUserList(event) {
        this.props.history.push('todolists');
    }

    render() {

        return (
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title={ "Create or List ToDoList's"}
                    />
                    <Card style={cardStyle}>
                        <label>Name:
                            <TextField

                                hintText="title"
                                floatingLabelText="ListName"
                                onChange={(event, newValue) => this.setState({listname: newValue})}
                            />
                        </label>
                        <br></br>

                        <RaisedButton label="CreateList" primary={true} style={style}
                                      onClick={(event) => this.handleClick(event)}/>
                        <RaisedButton label="ListUserList" primary={true} style={style}
                                      onClick={(event) => this.ListUserList(event)}/>


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
    margin: 15,
    width: '30vw',
    height: '10vw'
};

export default usertodolists;