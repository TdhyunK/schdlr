import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';

class ClassForm extends Component {

    onSubmit = (values) => {
        console.log("Submitted! : " + values);
    }

    createForms(numForms){

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
            {text: "TLA", value: "TLA"}
        ];

        const wc=[
            {text: "CI", value: "CI"},
            {text: "NW", value:"NW"},
            {text: "W", value:"W"}
        ];

        return(
            <div className="leftText field">
                    <label> Timeslot </label> 
                    <Field name="timeslot" data={timeslot} component={DropdownList} valueField="value" textField="text" />        

                    <label> Distributive </label>
                    <Field name="distrib" data={distrib} component={DropdownList} valuefield="value" textField="text" />

                    <label> World Culture </label>
                    <Field name="wc" data={wc} component={DropdownList} valueField="value" textField="text" />
            </div>
        );
    }

    render() {

        const { handleSubmit } = this.props;

        return(
        <div className="row">
            <form onSubmit={handleSubmit(this.onSubmit)}> 
                {this.createForms()}
            </form>
        </div>
        );
    }
}

export default reduxForm({form: "classForms"})(ClassForm);
