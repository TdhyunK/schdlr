import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { submitNumForms } from "../actions/index"; 
import ClassForm from "./classForm";

class App extends Component {

    renderField(field){
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : "" }`;
        return(
            <div className={className}>
                <h6> {field.label} </h6>
                <div className="row">
                    <input id="numForms" className="form-control" type="text" {...field.input}/>
                    <button type="submit" className="btn btn-primary"> Next Step </button>
                </div>
                <div className="text-help">
                    { touched ? error : "" }
                </div>
            </div>
        );
    }

    onSubmit = (values) => {
        this.props.submitNumForms(values.numForms);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
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
                                <ClassForm numOfClassForms={this.props.numForms} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    </div>
                </div>
            </div>
        );
      }
}


function mapStateToProps(state){
    return { numForms: state.numForms }; 

}

function validate(values){
    const errors = {};

    if (values.numForms > 3 || values.numForms <= 0 || isNaN(values.numForms)) {
        errors.numForms = "Please enter a number between 0 and 3.";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'numForms'
})(connect(mapStateToProps, { submitNumForms })(App)); 
