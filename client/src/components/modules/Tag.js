import React, { Component } from "react";

class Tag extends Component {
    constructor(props){
        super(props);
        this.state={
            content: "Be a horse",
            completed: false,
        }
    }

    render(){
        return(
            <div>
                {this.state.content} Completion: {this.state.completed.toString()}
            </div>
        ) 
    }
}

export default Tag;