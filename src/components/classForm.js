import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class classForm extends Component {

    renderField(field){
       <div className="form-group">
                <label> {field.label} </label>
                <input className="form-control classForm" type="text" {...field.input}/>
        </div>
    }

    createForms = (numForms) => {
        for(int i = 0; i < numForms; i++) {
            <Field label ="Timeslot" name="timeslot" component={this.renderField} />        
            <Field label ="Distributive" name="distrib" component={this.renderField} />        
        }
    }

    render() {

        const { handleSubmit } = this.props;

        <div className="row">
            <form onSubmit={handleSubmit(this.onSubmit)}> 
            </form>
        </div>
    }
}
