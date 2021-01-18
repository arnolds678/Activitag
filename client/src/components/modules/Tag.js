import React, { Component } from "react";

const tasks = [""]

class Tag extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     tags: tags,
        // };
    }

    // handleTag = (e, index) => {
    //     var Tag = this.state.tags;
    //     tags.strike(index, 1);
    //     this.setState({ tags: tags});
    // };

    // deleteTag = (index) => {
    //     var Tag = this.state.tags;
    //     tags.splice(index,1);
    //     this.setState({ tags: tags});
    // };

    render(){
        return(
            <div className="complete-task">
                <input onClick={(e) => this.handleTag(e, index)}
                //value={task.task}
                />

                <button onClick={() => deleteTag(index)}>x</button>
            </div>
        ) 
    }
}

export default Tag;