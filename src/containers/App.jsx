import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as scoreManager from '../actions/scoring'
import Header from '../components/Header.jsx';
import ScoreBoard from '../components/ScoreBoard.jsx';


class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {changePlayerName, recordScore}  = this.props;
        changePlayerName('player2', 'Michael Burden');
        recordScore('player2', 0, 1, 10);
    }

    render() {
        console.log(this.props);
        return(
            <div id="scoreWrapper">
                <Header />
                <ScoreBoard {...this.props} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {scoreBoard: state};
}

function mapDispatchToProps(dispatch) {
    return {
        changePlayerName: function(player, name) {
          dispatch(scoreManager.changePlayerName(player, name));
      },
      recordScore: function(player, frame, roll, score) {
          dispatch(scoreManager.recordScore(player, frame, roll, score))
      }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);