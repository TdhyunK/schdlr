import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import DropdownList from "react-widgets/lib/DropdownList";
import "react-widgets/dist/css/react-widgets.css";
import { getClasses } from "../actions/index";

class ClassForm extends Component {

    renderDropdownList = ({ input, data, valueField, textField }) => (
      <DropdownList
        {...input}
        data={data}
        valueField={valueField}
        textField={textField}
        onChange={input.onChange}
      />
    )

    onSubmit = (values) => {
        const numKeys = Object.keys(values).length;
        if(numKeys < 3 * this.props.numOfClassForms) {
            document.getElementById("warningText").style.display="inherit";
        }
        else{
            document.getElementById("warningText").style.display="none";
            this.props.getClasses(values);
        }
    }   

    createForms(i){

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
            <div className="col-lg-3" key={i}>
                <div className="classField" >
            { /* <h4> Class {i + 1} </h4> */ }
                        <label> Timeslot </label> 
                        <Field name={"timeslot-" + i} data={timeslot} component={this.renderDropdownList} valueField="value" textField="text" /> 

                        <label> Distributive </label>
                        <Field name={"distrib-" + i} data={distrib} component={this.renderDropdownList} valueField="value" textField="text" />

                        <label> World Culture </label>
                        <Field name={"wc-" + i} data={wc} component={this.renderDropdownList} valueField="value" textField="text" />
                </div>
            </div>
        );
    }


    render() {

        const { handleSubmit } = this.props;
        const classForms = [];
        for(var i = 0; i < this.props.numOfClassForms; i++){
            classForms.push(this.createForms(i));
        }  

        
        if(isNaN(this.props.numOfClassForms)){
            return(
            null  
            );
        } 
        else{
            return(

            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}> 
                {classForms}
                <div className="row" id="submitRow">
                    <div className="col-lg-3">
                        <button type="submit" className="btn btn-primary"> Show Classes </button>
                    </div>
                    <div className="col-lg-9">
                        <p id="warningText" className="has-danger"> Please enter a value for every field. </p>
                    </div>
                </div>
                </form>
            </div>
            );
        }
    }
}

export default reduxForm({
    form: "classForms"
})(connect(null, { getClasses })(ClassForm));
