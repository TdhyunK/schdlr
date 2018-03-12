import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ClassForm from "./classForm";
import ClassList from "../containers/classList";
import { getClasses } from "../actions/index";


/*
 * Main app component on the home page.
 */
class App extends Component {


//    constructor(props) {
//        super(props);
//        console.log(this.props);
//        if (this.props["location"]["pathname"] == "\/classes") {
//            this.props.getClasses();
//        }
//    }
//
//    componentWillReceiveProps(nextProps, nextState) {
//        if (nextProps.src != this.props.src){
//            const qs = require("query-string");
//            const timeslot = qs.parse(nextProps["location"]["search"])["timeslot"];
//            const distrib = qs.parse(nextProps["location"]["search"])["distrib"];
//            const wc = qs.parse(nextProps["location"]["search"])["wc"];
//
//            console.log("tee");
//            this.props.getClasses(timeslot, distrib, wc);
//        }
//    }
//
    render() {

        if (this.props["location"]["pathname"] == "\/classes") {
            const qs = require("query-string");
            const timeslot = qs.parse(this.props["location"]["search"])["timeslot"];
            const distrib = qs.parse(this.props["location"]["search"])["distrib"];
            const wc = qs.parse(this.props["location"]["search"])["wc"];

            console.log("tee");
            this.props.getClasses(timeslot, distrib, wc);
        }

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

export default withRouter(connect(mapStateToProps, { getClasses })(App)); 
