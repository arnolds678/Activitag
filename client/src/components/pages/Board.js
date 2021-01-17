//The main page with all the "herds" inside them
import React, { Component } from "react";
import Herd from "../modules/Herd.js";
import { get } from "../../utilities";

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            herds: [],
        };
    }

    componentDidMount() {
        get("/api/herds").then((herdObj) => {
            herdObj.map((herdObj) => {
                this.setState({ herds: this.state.herds.concat([herdObj])});
            });
        });
    }

    addNewHerd = (herdObj) => {
        this.setState({
            herds: this.state.herds.concat([herdObj]),
        });
    };
    
    render() {
        let herdsList = null;
        const hasHerds = this.state.herds.length !== 0;
        if (hasHerds){
            herdsList = <div>Inputted a Herd!</div>
        }
        else{
            herdsList = <div>No Herds!</div>;
        }
        return(
            herdsList
        );
    }    
}


export default Board; 
