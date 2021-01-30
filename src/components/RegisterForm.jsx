import Form from "./common/form";
import Joi from "joi-browser";
import {register} from "../services/userService";
class RegisterForm extends Form {
    state = {
        data: {
            username: "",
            password: "",
            email: ""
        },
        errors: {

        },
        inputs: [
            {name: "username", path: "username", label: "Username", type: "text"},
            {name: "password", path: "password", label: "Password", type: "password"},
            {name: "email", path: "email", label: "Email", type: "text"},
        ]
    }

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
        email: Joi.string().email().required().label("Email")
    }

    doSubmit() {
        const {username, password, email} = this.state.data;
        const regStatus = register(username, password, email);
        if (regStatus) return window.location = "/";
        console.log("Error during registering happened");
    }

    render() { 
        return (
            <div className="login_box">
                <h2>Signup</h2>
                <form onSubmit={this.handleSubmit}>
                    {this.state.inputs.map(i => this.renderInput(i))}
                    {this.renderButton("Signup")}
                </form>
            </div>
        )
    }
}
 
export default RegisterForm;