
import React, { Component } from "react";
import { connect } from "react-redux";
import { undo, redo } from "../reducers/actions";

class History extends Component {
    render() {
        return <div id="history-controls">
            {/* On Click we execute the 'undo' function that became attached to props. */}
            <button onClick={this.props.undo}>undo</button>
            <button onClick={this.props.redo}>redo</button>
        </div>
    }
}

// This component doesn't read the state, it only dispatches things/sends messages, which is why we can
// omit that 'mapStateToProps' function and pass in 'null' as the first parameter of the connect method. 

function mapDispatchToProps(dispatch){
    return {
        // Here we dispatch a call to the undo() function that we imported.
        // These functions return the string we had typed before "UNDO", but its wrapped and more presentable.
        undo: () => dispatch(undo()),
        redo: () => dispatch(redo())
    }
}

// The connect function expects two parameters, so we need to pass in null to take up the spot of the 'mapStateToProps'.
export default connect(null, mapDispatchToProps)(History);