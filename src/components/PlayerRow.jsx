import React, { Component } from 'react';

export default class PlayerRow extends Component {

    constructor(props) {
        super(props)
    }

    showNameChangeModal(player, name) {
        this.props.uiTools.fadeIn('modalOverlay');
        this.props.uiTools.fadeIn('playerNameModal');
        document.getElementById('playerName').value = name;
        document.getElementById('playerKey').value = player;
    }

    render() {
        let playerName = this.props.playerData.name;
        return (
            <section className = "player-row">
                <div className = "board-player" onClick={this.showNameChangeModal.bind(this, this.props.player, playerName)}>{playerName}</div>
                {
                    this.props.playerData.frames.map(function (result, key) {
                        if (key < 9 ) {
                            return (
                            <div className="board-frame" id={key}>
                                <div className="frame-container">
                                    <div className="frame-roll">

                                    </div>
                                    <div className="frame-roll">

                                    </div>
                                </div>
                            </div>
                            )
                        } else {
                            return (
                                <div className="board-frame final-frame">
                                    <div className="frame-container">
                                        <div className="frame-roll">
                                        </div>
                                        <div className="frame-roll">
                                        </div>
                                        <div className="frame-roll">
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