import React, {Component} from "react";
import Joi from 'joi-browser';
import Input from "./input";

class Form extends Component {
    state = {
        data: {},
        errors: {}
    }

    // 3:20:20
    validateProperty = ({name, value}) => {
        // this component/method will return the error message(if there is) from specified problematic input.
        // will use Joi here.
        const obj = { [name]: value };    // similar to - const obj={} ---> obj[name] = value;
        // build schema - Will determine(יקבע) Which things I have to deal with when I change the specific field.
        // we will have another class component that extends from "Form" component, and the schema will be exists there and because of this, "this." will relate to her.
        // Example:
                                            // class someForm extends Form {
                                            //     schema = {
                                            //         age: {min:4}
                                            //     }
                                            // }
        const schema = { [name]: this.schema[name] } // --> this schema exists in my properties
        // check with the schema if what im doing is ok:
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;    // check if there is an error return the error details(1st), if there isn't -> return "null".

    }

    handleChange = ({currentTarget: input}) => {
        // this component will use to manage the errors.
        // 1. extract 'errors' from state to know which errors i have.
        const errors = {...this.state.errors};
        // 2. to see if there is any error that refers(מתייחסת) to the 'input' info that i change.
        const errorMessage = this.validateProperty(input);        // ===> validateProperty() - is an internal method(מתודה פנימית) 
        if(errorMessage) errors[input.name] = errorMessage;       // ===> if there is error message(if its not null)
        else delete errors[input.name]

        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data, errors});              // ===> update the state
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} })    // ===> if there is errors -> return errors, else -> return empty object.
        if(errors) return;

        this.doSubmit();
    }

    validate = () => {
        const options = {abortEarly: true};
        const {error} = Joi.validate(this.state.data, this.schema, options);
        if(!error) return null;

        const errors = {}
        for(let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    }

    renderButton(label) {
        return (
            <button disabled={this.validate()} className="btn btn-primary">
                {label}
            </button>
        )
    }

    renderInput(name, label, type = "text") {
        // 1. extract 'date', 'errors' from my state.
        const { data, errors } = this.state;
        // 2. this component func will return an Input with the following attributes:
        return (
            <Input
            // 2.1. base attributes (are defined in the 'input' component):
                name={name}
                label={label}
                error={errors[name]}

            // 2.2. add attributes to "...rest":
                type={type}
                value={data[name] || ""}
                onChange={this.handleChange}
            />
        );
    }
}

export default Form;