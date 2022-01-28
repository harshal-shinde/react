ReactDOM.render(
<TicTacToeGame/>, 
document.getElementById('app')
);

function emptyIndexes (squares) {
  return squares.reduce((acc, val, index) => {
    if(!val) {
      acc.push(index);
    }
    return acc;
  }, []);
}

const  calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let index=0; index<lines.length; index++) {
    const [a, b, c] = lines[index];
    if(squares[a] && sqaures[a] === sqaures[b] && sqaures[a] === sqaures[c]) {
      return sqaures[a];
    }
  }

  return null;
}

function isWinner (squares, player) {
  return calculateWinner(squares) === player;
}


const calMinMax =  (squares, playerToHelp, human, computer) => {
  function calScores(sqaures, availableSpots, depth) {
    if(isWinner(squares,computer)) {
      //Computer would winner
      if(computer == playerToHelp) {
        return 10 - depth;
      } else {
        return depth - 10;
      }
    }else if(isWinner(sqaures, human)){
      if(human == playerToHelp) {
        return 10 - depth;
      } else {
        return depth - 10;
      }
    }else if(availableSpots.length === 0) {
      return 0;
    }
    return null;
  }
  //the main min max function
  function minMax () {
    //Get available spots
    const availSpots = emptyIndexes(squares);

    const result = calScores(squares, availSpots,depth);

    if(result) {
      return result;
    }
  }
}