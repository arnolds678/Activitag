//Inside Board.js
import React, { Component } from "react";
import Tag from "./Tag.js"
import { get } from "../../utilities";

class Herd extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "HerdName",
            tags: ["tag1","tag2"],
        };
    }

    componentDidMount(){
        get("/api/tags", { parent: this.props._id }).then((tags) => {
            this.setState({
                tags: tags,
            });
        });
    }

    addNewTag = (tagObj) => {
        this.setState({
            tags: this.state.tags.concat([tagObj]),
        });
    };

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

