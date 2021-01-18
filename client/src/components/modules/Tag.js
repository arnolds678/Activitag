import React, { Component } from "react";
import NewTag from "./NewTagInput";

const value = {NewTag}

class Tag extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: value,
            tags: undefined,
        };
    }

    handleTag = (e, value) => {
        const element = event.target;
        value[value].crossLine(value, 1);
        this.setState({ value: value});
    };

    deleteTag = (value) => {
        var value = this.state.value;
        value.splice(value, 1);
        this.setState({ value: value});
    };

    render(){
        return(
            <div className="complete-task">
                <input onClick={event => this.handleTag(e, value=this.props.content)}/>

                <button onClick={() => deleteTag(value)}>x</button>
            </div>
        ) 
    }
}

export default Tag;