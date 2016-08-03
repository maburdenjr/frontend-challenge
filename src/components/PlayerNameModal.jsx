import React, { Component } from 'react';

export default class PlayerNameModal extends Component {

    constructor(props) {
        super(props);
        this.submitNameChange = this.submitNameChange.bind(this);
    }

    componentDidMount() {
    }

    submitNameChange() {
        let playerName = document.getElementById('playerName').value;
        let playerKey = document.getElementById('playerKey').value;
        if (playerName != null && playerName != '') {
            this.props.changePlayerName(playerKey, playerName);
            this.props.uiTools.closeModals();
        } else {
            alert('Please enter a name for this player.');
        }
    }

    render() {
        return (
            <div id="playerNameModal" className="modal">
                <h1>Change Player Name</h1>
                 <input id="playerName" type="text" />
                 <input id="playerKey" type="hidden" />
                <div className="modal-actions">
                <a className="btn" onClick={this.props.uiTools.closeModals}>Cancel</a> <a className="btn primary" onClick={this.submitNameChange}>Save</a>
                </div>
             </div>

        )
    }
}