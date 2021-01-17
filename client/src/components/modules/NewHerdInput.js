import React, { Component } from "react";
import NewTaskInput from "./NewTaskInput.js";

import { post } from "../../utilities.js"

class NewHerd extends Component {
    addHerd = (value) => {
        const body = { content: value };
        post("/api/herds", body).then((herd) => {
            this.props.addNewHerd(herd);
        });
    };

    render() {
        return <NewTaskInput defaultText="New Herd" onSubmit={this.addHerd} />;
    }
}