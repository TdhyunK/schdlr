import React from "react";
import { Component } from "react";

/*
 * Class list component 
 * Lists out the valid classes of a classForm query
 */
export default class ClassList extends Component {

    /*
     * Helper function to render list items.
     */
    createListItem(classItem){
        return(
        <li key={classItem["name"]} className="list-group-item">
            {classItem.subj} {classItem.num} {classItem.dist} {classItem.period} {classItem.wc}
            </li>

        );
    }
    
    /*
     * Helper function to render the class list.
     */
    renderList(){
        
        const classList = [];

        if (this.props.classes != null) {
            for(var i = 0; i < this.props.classes.length; i++){
               classList.push(this.createListItem(this.props.classes[i]));
            }
        }
        return classList;
    }

    render() {
        if(Object.keys(this.props.classes).length != 0){
            return(
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            );
        }
        return(null);
    }
}
