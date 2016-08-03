import React, { Component } from 'react';

export default class PlayerRow extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className = "player-row">
                <div className = "board-player">{this.props.playerData.name}</div>
                {
                    this.props.playerData.frames.map(function (result, key) {
                        if (key < 10 ) {
                            return (
                            <div className="board-frame">
                                <div class="frame-container">
                                    <div class="frame-roll">
                                    </div>
                                    <div class="frame-roll">
                                    </div>
                                </div>
                            </div>
                            )
                        } else {
                            <div className="board-frame">
                                <div class="frame-roll">
                                </div>
                                <div class="frame-roll">
                                </div>
                                <div class="frame-roll">
                                </div>
                            </div>
                        }
                    })
                }
                <div className = "board-score">{this.props.playerData.totalScore}</div>
            </section>
        )
    }
}