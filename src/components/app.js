import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createForms } from "../actions/index.js"; 

class App extends Component {

    renderField(field){
        console.log(field.meta.touched);
        return(
            <div className="form-group">
                <label> {field.label} </label>
                <div className="row">
                    <input id="numForms" className="form-control" type="text" {...field.input}/>
                    <button type="submit" className="btn btn-primary"> Next Step </button>
                </div>
                <div className="text-help">
                </div>
            </div>
        );
    }

    onSubmit = (values) => {
        this.props.createForms(values.numForms);
    }
    

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="fullScreen"> 
                <div className="leftText">
                        <h1 id="schdlr" > SCHDLR </h1>
                        <h4> Let us help you pick your next class schedule </h4>
                        <form onSubmit={handleSubmit(this.onSubmit)} >
                            <Field 
                                label="Do you need help picking 1, 2, or 3 additional classes?"
                                name="numForms"
                                component={this.renderField}
                            />
                        </form>
                </div>
            </div>
        );
      }
}


function mapStateToProps(state){

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
})(connect(null, { createForms })(App)); 
