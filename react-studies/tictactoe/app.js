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

    const scores = [];
    //loop through available availSpots
    //fill moves and scores with

    const moves = availSpots.map((val, idx)=> {
      const nextPlayer = (player == human) ?
        computer : human;

        //Move to test with current player
        sqaures[val] = player;
        //recursive with depth +1

        const score = minimax(squares, nextPlayer, depth + 1);
        score.push(score);

        //reverse move
        sqaures[val] = null;
        return val;
    });

    let scoreIndex = 0;
    if(player == playerToHelp) {
      //player to help to maximize its points : max calc
      scoreIndex = scores.reduce((max, val) =>
      (iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    }else {
      //Opponents wants to minimize player to help  points: min calc
      scoreIndex = scores.reduce(
        (iMin, x, i, arr)=> {
            x< arr[min] ? i : iMin, o
      })
    }

    if(depth == 0) {
      return moves[scoreIndex];
    }
    return scores[scoreIndex];
  }
  const res = minimax(squares, playerToHelp, 0);
  return res;
}