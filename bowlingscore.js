  (function() {
    // example of use:
    // totalScore({
    //  frames: [
    //    {roll1: 5, roll2: 5},
    //    more frames...
    //    {roll1: 7, roll2: 3, roll3: 5} // possible third roll on last frame
    //  ]
    //})
    
    window.totalScore = function(game) {
     return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(function (acc, i) {
        return acc + (frameScore(game, i) || 0)
      }, 0)
    }
  
    window.frameScore = function(game, frameNumber) {
    var frames = game.frames,
        frame = frames[frameNumber],
        i = frameNumber,
        currentScore = 0

    // null means not filled in yet.
    if(frame.roll1 === null) {
      return null
    }

    currentScore += frame.roll1 || 0
    if(i < 9 || frame.roll1 !== 10) {
      currentScore += frame.roll2 || 0
    }

    if(frame.roll1 === 10) {
      currentScore += (i === 9 ? frame.roll2 || 0 : frames[i+1].roll1 || 0)
      currentScore += secondStrikeBonus() || 0
    } else if(frame.roll1 + frame.roll2 === 10) {
      currentScore += (i === 9 ? frame.roll3 || 0 : frames[i+1].roll1 || 0)
    }
    return currentScore

    function secondStrikeBonus() {
      if(i === 9) {
        return frame.roll3
      }
      var nextFrame = frames[i+1]
      if(i ===  8 || nextFrame.roll2) {
        return nextFrame.roll2
      }
      return frames[i+2].roll1
    }
  }
}())
