//The main page with all the "herds" inside them
import React, { Component } from "react";
import Herd from "../modules/Herd.js";

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            herds: [],
        };
    }

    componentDidMount() {
        //hard code for now
        this.setState({
            herds: [(<Herd />), (<Herd />)],
        });
    }
    
    render() {
        return(
            <ul>
                {this.state.herds.map((herd) =>(
                    <li>{herd}</li>
                ))};
            </ul>
        );
    }    
}


export default Board; 
