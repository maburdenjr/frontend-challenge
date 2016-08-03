import { combineReducers } from 'redux';
import * as scoreManager from '../actions/scoring'

//Setting Up Initial State
function initScoreBoard() {
    let scoreBoard = {};
    for (var x=1; x<5; x++) {
        scoreBoard['player'+x] = {name: 'Player '+x, frames:[]};
    }
    return scoreBoard;
}

const scoreBoardState = initScoreBoard();

function scoreTracker(state = scoreBoardState, action) {
    switch (action.type) {
        case scoreManager.CHANGE_PLAYER_NAME:
            let updateName = Object.assign({}, state);
            updateName[action.player].name = action.name;
            return updateName;
        default:
            return state;
    }
}

const rootReducer = scoreTracker;
export default scoreTracker;