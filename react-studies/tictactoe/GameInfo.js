const INIT_HISTORY = [{
    squaures: Array(9).fill(null)
}];

const INIT_STATE = {
  history: INIT_HISTORY,
  playerIsNext: true,
  stepNumber: 0,
  player: null,
  winners: null
};

const GameInfo = (props) => {
  const {
    player,
    playerIsNext,
    history,
    winner,
    onClick,
    stepNumber,
  } = props;

  let status;
  //Check status of winner
  if(winner) {
    status = "Winner: " + winner;
  } else if(player) {
    const opponent = (player === "X") ? "O" : "X";
    status = "Next player: "+ (playerIsNext ? player : opponent);
  } else {
   status = "Select X or O"; 
  }

  const moves = (history.length <= 1 || winner ) ? [] : history.map((step, move) => {
    let moveText = 'Move #' +move;
    moveText  = (stepNumber == move) ? <b>{moveText}</b> :moveText;

    const desc = move ? moveText : <b>Game Start</b>

    return (
      <div key={move}>
        <a href="#" onClick={() => {onClick(move)}}>{desc}</a>
      </div>
    );
  });

  
}