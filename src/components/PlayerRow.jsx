import React, { Component } from 'react';

export default class PlayerRow extends Component {

    constructor(props) {
        super(props);
        this.showNameChangeModal = this.showNameChangeModal.bind(this);
    }
    showScoreModal(player, frame, roll, score, otherFrame) {
        this.props.uiTools.fadeIn('modalOverlay');
        this.props.uiTools.fadeIn('frameScoreModal');
        document.getElementById('playerKey').value = player;
        document.getElementById('playerFrame').value = frame;
        document.getElementById('playerRoll').value = roll;
        document.getElementById('playerScore').value = score;
        document.getElementById('playerExtFrame').value = otherFrame;
    }

    showNameChangeModal(player, name) {
        this.props.uiTools.fadeIn('modalOverlay');
        this.props.uiTools.fadeIn('playerNameModal');
        document.getElementById('playerName').value = name;
        document.getElementById('playerKey').value = player;
    }

    render() {
        let playerName = this.props.playerData.name;
        let row = this;
        return (
            <section className = "player-row">
                <div className = "board-player" onClick={this.showNameChangeModal.bind(this, this.props.player, playerName)}>{playerName}</div>
                {
                    this.props.playerData.frames.map(function (result, key) {
                        let roll1 = row.props.playerData.frames[key].roll1;
                        let roll2 = row.props.playerData.frames[key].roll2;
                        let roll3 = row.props.playerData.frames[key].roll3;

                        let roll1Display = (roll1 == 10 ? "X" : roll1);
                        let roll2Display = ((roll1 < 10 && (roll1 + roll2 == 10)) ? "/" : roll2);
                        let roll3Display = (roll3 == 10 ? "X" : roll3);

                        if (key < 9 ) {
                            return (
                            <div className="board-frame" key={key}>
                                <div className="frame-container">
                                    <div className="frame-roll" onClick={row.showScoreModal.bind(row, row.props.player, key, 2, roll2, roll1)}>
                                        {roll2Display}
                                    </div>
                                    <div className="frame-roll" onClick={row.showScoreModal.bind(row, row.props.player, key, 1, roll1, roll2)}>
                                        {roll1Display}
                                    </div>

                                </div>
                            </div>
                            )
                        } else {
                            return (
                                <div className="board-frame final-frame">
                                    <div className="frame-container">
                                        <div className="frame-roll" onClick={row.showScoreModal.bind(row, row.props.player, key, 3, roll3Display)}>
                                            {roll3Display}
                                        </div>
                                        <div className="frame-roll" onClick={row.showScoreModal.bind(row, row.props.player, key, 2, roll2, roll3)}>
                                            {roll2Display}
                                        </div>
                                        <div className="frame-roll" onClick={row.showScoreModal.bind(row, row.props.player, key, 1, roll1, roll2)}>
                                            {roll1Display}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                <div className = "board-score">{this.props.playerData.totalScore}</div>
            </section>
        )
    }
}