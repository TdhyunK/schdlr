import React, { Component } from "react";
import { browserHistory, withRouter } from 'react-router-dom';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import DropdownList from "react-widgets/lib/DropdownList";
import "react-widgets/dist/css/react-widgets.css";

/*
 * Class form component.
 * Redux forms to look up class by distributive, world culture, timeslot.
 */
class ClassForm extends Component {

    /*
     * Helper function render redux form Field
     */
    renderDropdownList = ({ input, data, valueField, textField, meta: { touched, error } }) => (
        <div className= { error ? "has-danger" : ""} >
          <DropdownList
            {...input}
            data={data}
            valueField={valueField}
            textField={textField}
            onChange={input.onChange}
          />
          { touched ? error : "" }
        </div>

    )

    onSubmit = (values) => {

        const timeslot =  values['timeslot']['value'];
        const distrib = values['distrib']['value'];
        const wc = values['wc']['value'];
        const queryString = "?timeslot=" + timeslot + "&distrib=" + distrib + "&wc=" + wc;

        this.props.history.push({
            pathname: "/classes",
            search: queryString 
        });
    }   

    createForms(){

        const timeslot=[
            {text: "8", value: "8"},
            {text: "9S", value: "9S"}, 
            {text: "9L", value: "9L"}, 
            {text: "10", value: "10"},
            {text: "10A", value: "10A"},
            {text: "11", value: "11"},
            {text: "12", value: "12"},
            {text: "2", value: "2"},
            {text: "2A", value: "2A"},
            {text: "3A", value: "3A"},
            {text: "3B", value: "3B"},
            {text: "6A", value: "6A"},
            {text: "6B", value: "6B"}
        ];

        const distrib=[
            {text: "ART", value: "ART"},
            {text: "LIT", value: "LIT"},
            {text: "TMV", value: "TMV"},
            {text: "INT", value: "INT"},
            {text: "SOC", value: "SOC"},
            {text: "QDS", value: "QDS"},
            {text: "SCI", value: "SCI"},
            {text: "SLA", value: "SLA"},
            {text: "TAS", value: "TAS"},
            {text: "TLA", value: "TLA"},
            {text: "Don't care", value: null}
        ];

        const wc=[
            {text: "CI", value: "CI"},
            {text: "NW", value:"NW"},
            {text: "W", value:"W"},
            {text: "Don't care", value: null}
        ];


        return(
            <div className="col-lg-3">
                <div className="classField" >
                        <label> Timeslot </label> 
                        <Field name="timeslot" data={timeslot} component={this.renderDropdownList} valueField="value" textField="text" /> 

                        <label> Distributive </label>
                        <Field name="distrib" data={distrib} component={this.renderDropdownList} valueField="value" textField="text" />

                        <label> World Culture </label>
                        <Field name="wc" data={wc} component={this.renderDropdownList} valueField="value" textField="text" />
                </div>
            </div>
        );
    }


    render() {

        const { handleSubmit } = this.props;

        return(

            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}> 
                    {this.createForms()}
                    <div className="row" id="submitRow">
                        <div className="col-lg-3">
                            <button type="submit" className="btn btn-primary"> Show Classes </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.timeslot) {
        errors.timeslot = "Required";
    }
    
    if (!values.distrib) {
        errors.distrib = "Required";
    }

    if (!values.wc) {
        errors.wc = "Required";
    }

    return errors;
}

export default withRouter(reduxForm({
    form: "classForms",
    validate
})(ClassForm));

