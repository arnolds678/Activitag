import React, { Component } from "react";

class Tag extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Card-commentBody">
                {/* <Link to={`/profile/${this.props.creator_id}`} className="u-link u-bold">
                {this.props.creator_name}
                </Link> */}
                <p>{this.props.content}</p>
                <p>Completion: False</p>
            </div>
        ) 
    }
}

export default Tag;