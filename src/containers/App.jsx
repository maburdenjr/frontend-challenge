import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as scoreManager from '../actions/scoring'
import Header from '../components/Header.jsx';
import ScoreBoard from '../components/ScoreBoard.jsx';
import PlayerNameModal from '../components/PlayerNameModal.jsx';


class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {changePlayerName, recordScore}  = this.props;
        changePlayerName('player2', 'Michael Burden');
        recordScore('player2', 0, 1, 10);
    }

    userInterfaceTools() {
        return {
            fadeIn: function(elementId) {
                let element = document.getElementById(elementId);
                let op = 0.1;  // initial opacity
                element.style.display = 'block';
                let timer = setInterval(function () {
                    if (op >= 1){
                        clearInterval(timer);
                    }
                    element.style.opacity = op;
                    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                    op += op * 0.1;
                }, 10);
            },
            fadeOut: function(elementId) {
                // ToDo: Make this fade out instead of just disappearing
                var element = document.getElementById(elementId);
                element.style.display = 'none';
                element.style.opacity = 0;
                element.style.filter = 'alpha(opacity=0)';
            },
            closeModals: function() {
                document.getElementById('modalOverlay').style.display = "none";
                document.getElementById('playerNameModal').style.display = "none";

            }
        }
    };


    render() {
        console.log(this.props);
        return(
            <div className="appWrapper">
                <div id="scoreWrapper">
                    <Header />
                    <ScoreBoard {...this.props} uiTools={this.userInterfaceTools()} />
                </div>
                <div id="modalOverlay" onClick={this.userInterfaceTools().closeModals}></div>
                <PlayerNameModal {...this.props} uiTools={this.userInterfaceTools()} />
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