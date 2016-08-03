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
        let playerExtFrame = parseInt(document.getElementById('playerExtFrame').value);

        if (playerScore > 10 || isNaN(playerScore)) {
            alert("You may only enter the numbers 0-10 for each frame.")
            return false;
        }
        if (playerFrame < 9) {
            if (playerScore + playerExtFrame > 10) {
                let remainingPins = 10 - playerExtFrame;
                alert('You have entered an incorrect number of pins for this frame.  You may only enter up to ' + remainingPins + ' in this frame.');
                return false;
            }
        }

        this.props.recordScore(playerKey, playerFrame, playerRoll, playerScore);
        this.props.uiTools.closeModals();

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
                <input id="playerExtFrame" type="hidden" />
                <div className="modal-actions">
                    <a className="btn" onClick={this.props.uiTools.closeModals}>Cancel</a> <a className="btn primary" onClick={this.saveScore}>Save</a>
                </div>
            </div>

        )
    }
}