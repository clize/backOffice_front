import React, { Component } from 'react';
import ApiService from "../../ApiService";

import { TextField } from '@material-ui/core';

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


class EditUserComponent extends Component {

    constructor(props) {
        super(props) ;

        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            age: '',
            salary: '',
            message: null
        }
    }

    componentDidMount(){
        this.loadUser();
    }

    loadUser = (e) => {
        ApiService.fetchUserByID(window.localStorage.getItem("UserID"))
        
        .then( res => {
            let user = res.data; 
            this.setState({
                id: user.id,
                username: user.username,
                firstame: user.firstname,
                lastname: user.lastname,
                age: user.age,
                salary: user.salary
            })
        })
        .catch( err => {
            console.log('saveUser() 에러', err);
        });
    }


    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    saveUser = (e) => {
        e.preventDefault();

        let user = {
            id: this.state.id,
            password: this.state.password,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            age: this.state.age,
            salary: this.state.salary
        }

        ApiService.editUser(user)
        .then( res => {
            this.setState({
                message: user.lastname + '수정 성공.'
            })
            console.log(this.state.message);
            this.props.history.push('/users');
        })
        .catch( err => {
            console.log('saveUser() 에러', err);
        });
    }

    render() {
        return(
            <div>
                <Typography variant="h4" style={style}>Edit User</Typography>
                <form>
                <TextField type="text" name="username"
                fullWidth margin="normal" value={this.state.username} />
                
                <TextField placeholder="Edit your firstname" name="firstname"
                fullWidth margin="normal" value={this.state.firstname} onChange={this.onChange} />

                <TextField placeholder="Edit your lastname" name="lastname"
                fullWidth margin="normal" value={this.state.lastname} onChange={this.onChange} />

                <TextField type="number" placeholder="Edit your age" name="age"
                fullWidth margin="normal" value={this.state.age} onChange={this.onChange} />

                <TextField type="number" placeholder="Edit your salary" name="salary"
                fullWidth margin="normal" value={this.state.salary} onChange={this.onChange} />

                <Button varient="contained" color="primary" onClick={this.saveUser}>Save</Button>

                </form>

            </div>
        );
    }

}

const style = {
    display: 'flex',
    justifyContent: 'center'
}


export default EditUserComponent;