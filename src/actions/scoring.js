export const CHANGE_PLAYER_NAME = 'CHANGE_PLAYER_NAME';
export const RECORD_SCORE = 'RECORD_SCORE';

export function changePlayerName(player, name) {
    return {
        type: 'CHANGE_PLAYER_NAME',
        player: player,
        name: name
    }
}

export function recordScore(player, frame, roll, score) {
    return {
        type: 'RECORD_SCORE',
        player: player,
        frame: frame,
        roll: roll,
        score: score
    }
}