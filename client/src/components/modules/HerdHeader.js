import React, { Component } from "react";
import { Link } from "@reach/router";

class HerdHeader extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          {/* <Link to={`/profile/${this.props.creator_id}`} className="u-link u-bold">
            {this.props.creator_name}
          </Link> */}
          <h1>{this.props.content}</h1>
        </div>
      );
    }
  }

  export default HerdHeader;