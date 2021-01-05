
import React, { Component } from "react";
import { connect } from "react-redux";

class History extends Component {
    render() {
        return <div id="history-controls">
            {/* On Click we execute the 'undo' function that became attached to props. */}
            <button onClick={this.props.undo}>undo</button>
            <button onClick={this.props.redo}>redo</button>
        </div>
    }
}

// This component doesn't read the state, it only sends messages, which is why we can
// pass in 'null' as the first parameter of the connect method. 

function mapDispatchToProps(dispatch){
    return {
        // Here is the undo function thats attached to props, and it dispatches the event.
        undo: () => dispatch({type: "UNDO"}),
        redo: () => dispatch({type: "REDO"})
    }
}

export default connect(null, mapDispatchToProps)(History);