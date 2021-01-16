//Inside Board.js
import React, { Component } from "react";

class Herd extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "HerdName",
            tags: ["tag1","tag2"],
        };
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <div>
                    {this.state.tags}
                </div>
            </div>
        );
    }
}

export default Herd;

