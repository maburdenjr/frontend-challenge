import React, { Component } from 'react';

export default class PlayerNameModal extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="playerName" className="modal">
                <h1>Change Player Name</h1>
                 <input id="playerName" type="text" />
                <div className="modal-actions">
                <a className="btn">Cancel</a> <a className="btn primary">Save</a>
                </div>
             </div>

        )
    }
}