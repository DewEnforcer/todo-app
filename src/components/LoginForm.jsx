import React from 'react';
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class LoginForm extends Form {
    state = {
        data: {
            username: "",
            password: ""
        },
        errors: {

        },
        inputs: [
            {name: "username", path: "username", label: "Username", type:"text"},
            {name: "password", path: "password", label: "Password", type:"password"},
        ]
    }

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }

    doSubmit() {
        const {username, password} = this.state.data;
        auth.login(username, password);
        window.location = "/";
    }

    render() { 
        return (
        <div className="login_box">
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
                {this.state.inputs.map((i) => this.renderInput(i))}
                {this.renderButton("Login")}
            </form>
        </div>
        )
    }
}
 
export default LoginForm;