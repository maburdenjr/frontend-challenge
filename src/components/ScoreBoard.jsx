import React, { Component } from 'react';
import PlayerRow from './PlayerRow.jsx';


export default class ScoreBoard extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props);
        var scoreBoard = this.props.scoreBoard;
        return (
            <div id="scoreBoard">
                <section className = "board-header">
                    <div className = "board-player">Player Name</div>
                    <div className = "board-frame">1</div>
                    <div className = "board-frame">2</div>
                    <div className = "board-frame">3</div>
                    <div className = "board-frame">4</div>
                    <div className = "board-frame">5</div>
                    <div className = "board-frame">6</div>
                    <div className = "board-frame">7</div>
                    <div className = "board-frame">8</div>
                    <div className = "board-frame">9</div>
                    <div className = "board-frame">10</div>
                    <div className = "board-score">Total</div>
                </section>
                {
                    Object.keys(scoreBoard).map(function (key) {
                        return (
                            <PlayerRow playerData={scoreBoard[key]} />
                        )
                    })
                }
            </div>
        )
    }
}