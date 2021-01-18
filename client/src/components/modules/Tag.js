import React, { Component } from "react";

const tags = [ {tag: ""}]

class Tag extends Component {
    constructor(props){
        super(props);
        this.state = {
            tags: tags,
        };
    }

    handleTag = (e, tags) => {
        var tags = this.state.tags;
        tags.strike(index, 1);
        this.setState({ tags: tags});
    };

    deleteTag = (tags) => {
        var tags = this.state.tags;
        tags.splice(tags,1);
        this.setState({ tags: tags});
    };

    render(){
        return(
            <div className="complete-task">
                <input onClick={(e) => this.handleTag(e, tags)}
                value={tags.tags}/>

                <button onClick={() => deleteTag(tags)}>x</button>
            </div>
        ) 
    }
}

export default Tag;