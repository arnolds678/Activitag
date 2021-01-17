//The side navbar with links to profile, and probably others 

import React, {Component} from "react";

//importing stylistic components
import "./NavBar.css";

//navigation bar takes no props, always at side of page when on board page
class NavBar extends Component {
    constructor(props) {
        super(props);
    }
}

//each title should correspond to different link and different location
render() {
    return(
        <nav className="NavBar-container">
            <div className="NavBar-title">activiTag</div>
            <div className="NavBar-title">profile</div>
            <div className="NavBar-linkContainer">
                <Link to="/" className="NavBar-link">
                    profile
                </Link>
                {this.props.userId && (
                    <Link to={`/profile/${this.props.userId}`} className="NavBar-link">
                        profile
                    </Link>
                    //not sure if this is how to link to a different page? should ask about this*
                )}
            </div>
            <div className="NavBar-title">search</div>
            <div className="NavBar-linkContainer">
                <Link to="/" className="NavBar-link">
                    search
                </Link>
            </div>
        </nav>
    );
}
//error with ; but i have no idea where its supposed to go ??