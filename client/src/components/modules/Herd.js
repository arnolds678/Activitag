//Inside Board.js
import React, { Component } from "react";
import Tag from "./Tag.js"

class Herd extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "HerdName",
            tags: ["tag1","tag2"],
        };
    }

    componentDidMount(){
        this.setState({
            tags: [<Tag />, <Tag />]
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <ul>
                    {this.state.tags.map((tag) => (
                        <li>{tag}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Herd;

