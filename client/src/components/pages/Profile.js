//The profile page

import React, {Component} from "react";

import "./profile.css";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined,
        }
    }

    render() {
        return(
            <nav className="Profile-container">
                <div className="Profile-title">profile</div>
                <div className="Profile-title">herds</div>
                <div className="Profile-title">achievements</div>
                <div className="Profile-title">settings</div>
            </nav>
        );
    }
}



export default Profile;