import React, { Component } from 'react';

export default class EnterFrameScore extends Component {

    constructor(props) {
        super(props);
        this.saveScore = this.saveScore.bind(this);

    }
    saveScore() {
        let playerScore = parseInt(document.getElementById('playerScore').value);
        let playerKey = document.getElementById('playerKey').value;
        let playerFrame = parseInt(document.getElementById('playerFrame').value);
        let playerRoll = parseInt(document.getElementById('playerRoll').value);
        this.props.recordScore(playerKey, playerFrame, playerRoll, playerScore);

    }

    componentDidMount() {
    }

    render() {
        return (
            <div id="frameScoreModal" className="modal hideme">
                <h1>Add/Modify Score</h1>
                <input id="playerScore" type="text" />
                <input id="playerKey" type="hidden" />
                <input id="playerFrame" type="hidden" />
                <input id="playerRoll" type="hidden" />
                <div className="modal-actions">
                    <a className="btn" onClick={this.props.uiTools.closeModals}>Cancel</a> <a className="btn primary" onClick={this.saveScore}>Save</a>
                </div>
            </div>

        )
    }
}