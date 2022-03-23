import React from "react";
import PageHeader from "./common/pageHeader";
import Form from "./common/form";
import Joi from "joi-browser";

class Signup extends Form {
  state = {
      data: {
          email: '',
          password: '',
          name: ''
      },
      errors: {}
  };

  schema = {
    //  schema property is a collection of definitions(הגדרות) to every field.
    email: Joi
        .string()
        .required()
        .email()
        .label("Email"),
    password: Joi
        .string()
        .required()
        .min(6)
        .label("Password"),
    name: Joi
        .string()
        .required()
        .min(2)
        .label("Name")
  }

  doSubmit = () => {
    //   call server
    console.log("Submitted", this.state.data);
  }

  render() {
    return (
        <div className="container">
            <PageHeader titleText="🔓 Sign-Up For Real App"/>

            <div className="row">
                <div className="col-12">
                    <p>You can open an account for free!!...</p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <form method="post" autoComplete="off" onSubmit={this.handleSubmit}>
                        {this.renderInput("email", "Your Email Dude", "email")}
                        <br />
                        {this.renderInput("password", "Your Password Dude", "password")}
                        <br />
                        {this.renderInput("name", "Your Name Dude")}
                        <br />
                        {this.renderButton("SignUp")}
                    </form>
                </div>
            </div>

        </div>
    );
  }
}

export default Signup;