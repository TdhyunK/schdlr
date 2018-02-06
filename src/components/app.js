import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  render() {

    return (
        <div className="fullScreen"> 
            <div className="leftText">
                    <h1 id="schdlr" > SCHDLR </h1>

                    <h4> Let us help you pick your next class schedule </h4>
            </div>
        </div>
    );
  }
}

export default App; 
