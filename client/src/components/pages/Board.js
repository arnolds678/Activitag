//The main page with all the "herds" inside them
import React, { Component } from "react";
import Herd from "../modules/Herd.js";
import NewHerd from "../modules/NewHerdInput.js";
import { get } from "../../utilities";

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            herds: [],
        };
    }

    componentDidMount() {
        document.title = "News Feed";
        get("/api/herds").then((storyObjs) => {
          let reversedStoryObjs = storyObjs.reverse();
          reversedStoryObjs.map((storyObj) => {
            this.setState({ herds: this.state.herds.concat([storyObj]) });
          });
        });
      }

    // componentDidMount() {
    //     // get("/api/herds").then((herdObjs) => {
    //     //     herdObjs.map((herdObj) => {
    //     //         this.setState({ herds: this.state.herds.concat([herdObj])});
    //     //     });
    //     // });
    // }

    addNewHerd = (herdObj) => {
        this.setState({
            herds: [herdObj].concat(this.state.herds),
        });
    };
    
    render() {
        let herdsList = null;
        const hasHerds = this.state.herds.length !== 0;
        if (hasHerds){
            herdsList = this.state.herds.map((herdObj) => (
                <Herd 
                    key={`Card_${herdObj._id}`}
                    _id={herdObj._id}
                    //creator_name={herdObj.creator_name}
                    //creator_id={herdObj.creator_id}
                    content={herdObj.content}
                    //userId={this.props.userId}
                />
            ))
        }
        else{
            herdsList = <div>No Herds!</div>;
        }
        return(
            <div>
                {<NewHerd addNewHerd={this.addNewHerd} />}
                {herdsList}
                HELLO test 2!
            </div>
        );
    }    
}


export default Board; 
