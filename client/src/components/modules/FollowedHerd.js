import React, { Component } from "react";
import HerdHeader from "./HerdHeader.js";

class FollowedHerd extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <HerdHeader 
            _id={this.props._id}
            creator_name={this.props.creator_name}
            creator_id={this.props.creator_id}
            content={this.props.content}
            />
        )
    }
}

export default FollowedHerd;