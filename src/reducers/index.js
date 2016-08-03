import { combineReducers } from 'redux';
import * as scoreManager from '../actions/scoring'

//Setting Up Initial State
function initScoreBoard() {
    let scoreBoard = {};
    for (let x=1; x<5; x++) {
        scoreBoard['player'+x] = {name: 'Player '+x, frames: []};
        for(var f=0; f<10; f++) {
            let singleFrame;
            (f<9 ? singleFrame = {roll1: null, roll2: null} : singleFrame = {roll1: null, roll2: null, roll3: null});
            scoreBoard['player'+x].frames.push(singleFrame);
        }
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
        case scoreManager.RECORD_SCORE:
            let updateScore = Object.assign({}, state);
            updateScore[action.player].frames[action.frame]['roll'+action.roll] = action.score;
        default:
            return state;
    }
}

const rootReducer = scoreTracker;
export default scoreTracker;