//Inside Board.js
import React, { Component } from "react";

import HerdHeader from "./HerdHeader.js"
import TagBlock from "./TagBlock.js"
import { get, post } from "../../utilities";

import { Link } from "@reach/router";

import "./Herd.css"

class Herd extends Component {
    constructor(props){
        super(props);
        this.state={
            // content: "HerdName",
            tags: [],
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

    followHerd = (event) => {
        const body = {
            content: this.props.content,
            creator_name: this.props.creator_name,
            creator_id: this.props.creator_id,
            userId: this.props.userId,
        }

        post("/api/followedHerds", body).then((msg) => {
            if(msg.content === "already following"){
                alert("You already follow this herd!");
            }
        });
    };


    render(){
        return(
            <div className="herd">
                <HerdHeader 
                    _id={this.props._id}
                    creator_name={this.props.creator_name}
                    creator_id={this.props.creator_id}
                    content={this.props.content}
                />
                <button
                    type="button"
                    value="follow"
                    onClick={this.followHerd}
                >
                    follow!
                </button>
                <TagBlock
                    herd={this.props}
                    tags={this.state.tags}
                    addNewTag={this.addNewTag}
                    userId={this.props.userId}
                />
            </div>


            // <div>
            //     <h1>
            //         {this.state.content}
            //     </h1>
            //     {/* <ul>
            //         {this.state.tags.map((tag) => (
            //             <li>{tag}</li>
            //         ))}
            //     </ul> */}
            // </div>
        );
    }
}

export default Herd;

