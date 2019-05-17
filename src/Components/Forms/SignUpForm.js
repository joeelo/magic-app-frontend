import React, { Component } from 'react';

class SignUpForm extends Component {
    state = {
        submitted: false,
        name: "",
        email: "",
        password: ""
    }

    formChangeHandler = (event) => {
        this.setState({
            [event.target.name]: [event.target.value] 
        })
    }

    formSubmitHandler = async (event) => {
        event.preventDefault();
        const userObj = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

         fetch("https://localhost:3000/users", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(userObj)
        }).then(res => res.json())
        .then(data => console.log(data))
        

    }

    render() {
        return (
            <div className="sign-up-form-component">
                <form className="sign-up-form-container" onSubmit={this.formSubmitHandler}>
                    <label> Name: </label><br/>
                    <input name="name" type="text" value={this.state.name} onChange={this.formChangeHandler}/><br/>
                    <label> Email: </label><br/>
                    <input name="email" type="text" value={this.state.email} onChange={this.formChangeHandler}/><br/>
                    <label> Password: </label><br/>
                    <input name="password" type="password" value={this.state.password} onChange={this.formChangeHandler}/><br/>
                    <button> Submit </button> <br/>
                </form>
            </div>
        );
    }
}

export default SignUpForm;