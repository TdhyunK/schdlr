import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { numForms } from "../actions/index.js"; 

class App extends Component {

    renderField(field){
        console.log(field.meta.touched);
        return(
            <div className="form-group">
                <label> {field.label} </label>
                <input className="form-control" type="text" {...field.input}/>
                <div className="text-help">
                </div>
            </div>
        );
    }

    handleChange = (e) => {
        console.log("handlle change");
    
    }
    

    render() {

        return (
            <div className="fullScreen"> 
                <div className="leftText">
                        <h1 id="schdlr" > SCHDLR </h1>

                        <h4> Let us help you pick your next class schedule </h4>
                        <Field 
                            label="Do you need help picking 1, 2, or 3 additional classes?"
                            name="numForms"
                            component={this.renderField}
                        />
                </div>
            </div>
        );
      }
}

function validate(values){
    const errors = {};
    console.log("validate");

    if (values.numForms > 3 || values.numForms <= 0) {
        console.log("Enter a valid number please");
        errors.title = "Please enter a number between 0 and 3.";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'numForms'
})(connect(null, { numForms })(App)); 
