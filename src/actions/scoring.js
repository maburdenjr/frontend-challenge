export const CHANGE_PLAYER_NAME = 'CHANGE_PLAYER_NAME';
export const RECORD_SCORE = 'ADD_SCORE';

export function changePlayerName(player, name) {
    return {
        type: 'CHANGE_PLAYER_NAME',
        player: player,
        name: name
    }
}

export function recordScore(player, roll, score) {
    return {
        type: 'RECORD_SCORE',
        player: player,
        roll: roll,
        score: score
    }
}