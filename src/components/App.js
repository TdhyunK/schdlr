import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import ClassForm from "./classForm";
import ClassList from "../containers/classList";

/*
 * Main app component on the home page.
 */
class App extends Component {

    render() {
        console.log(this.props);

        return (
                <div className="row">
                    <div className="col-lg-6">
                        <div className="fullScreen"> 
                            <div className="leftText">
                                <h1 id="schdlr" > SCHDLR </h1>
                                <h4> Let us help you pick your next class schedule </h4>
                                <ClassForm numOfClassForms={1} /> 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        { this.props.classes ? <ClassList classes={this.props.classForms} /> : <div> </div> }
                    </div>
                </div>
        );
      }
}

function mapStateToProps(state){
    return { 
        numForms: state.numForms,
        classForms: state.classForms    
    }; 

}

export default reduxForm({
    form: 'numForms'
})(connect(mapStateToProps, null)(App)); 
