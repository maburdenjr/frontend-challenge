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