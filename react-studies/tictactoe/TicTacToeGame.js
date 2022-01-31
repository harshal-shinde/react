class TicTacToeGame extends React.Component {

  constructor(props) {
    super();
    this.state = INIT_STATE;
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      playerIsNext: (step %2) ? false : true,
      winner: null
    });
  }

  resetGame(player) {
    this.setState({...INIT_STATE, player:player});
  }

  setPlayer(player) {
    this.setState({
      player: player
    });
  }

  setMove(i) {
    const { stepNumber, player, playerIsNext, winner } = this.state;
    //Get previous state of stepnumber
    const history = this.state.history.slice(0, stepNumber+1);
    //Get current state by using history 
    const current = history[history.length-1];
    const squares = current.squares.slice();

    //Understand this condition
    if (winner || squares[i]) {
      return;
    }

    //Get opponent details from
    const opponent = (player == "X") ? "O" : "X";
    squares[i] = playerIsNext ? player : opponent;
    const hasEmptyIndex = squares.some((s) => {
      return (s!= 'O' && s!= 'X')
    });

    //was there winner or even
    let nextWinner = calculateWinner(squares);

    if(!nextWinner && !hasEmptyIndex) {
       nextWinner ='-';
    }

    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      playerIsNext: !playerIsNext,
      winner: nextWinner
    });
  }

  handleClick(i) {
    const {playerIsNext, winner} = this.state;

    if(playerIsNext && !winner) {
      this.setMove(i);
    }
  }

  render() {
    const {history, stepNumber, playerIsNext, winner, player} = this.state;

    const current = history[stepNumber];
    if(winner) {
      /**
       * There was a winner, reset game
       * or no moves or game over
       * Restart game any way
       */

      setTimeout(() =>{this.resetGame(player)}, 2000);
    } else if(!playerIsNext) {
      //Now the computer has to play in a sec
      let emptyIndex = 0;
      const hasEmptyIndex = current.squares.some((s, idx)=> {
        if(s!='O' && s!='X') {
          emptyIndex = idx;
          return true;
        }
      });

      if(!hasEmptyIndex) {
        //no more moves and games
        console.log("Kind of error, no more moves!, game over");
      }else {
        //computer move in 2 secs
        const computer = player === "X" ? "O" : "X";
        const bestMove = calMinimax(current.sqaures, computer, player, computer);
        setTimeout(() =>{this.setMove(bestMove)}, 500);
      }
    }

    return (
    <div className="container">
      <div className="row">
        <div className="game-title">
          <h3>Tic Tac Toe</h3>
          <small>A react </small>
        </div>
      </div>

      <div className="row">
        <ChoosePlayer 
          player = {player}
          squares = {current.squares}
          onClick = {(i) => {this.setPlayer(i)}}
        />
        <Board 
        player = {player}
        sqaures = {current.sqaures}
        onClick = {(i) => {this.handleClick(i)}}
        />
      </div>

      <div className="row">
        <GameInfo 
          stepNumber = {StepNumber}
          player = {player}
          playerIsNext = {playerIsNext}
          history = {history}
          winner = {winner}
          onClick = {(move) => {this.jump(move)}}
        />
      </div>
      
    </div>
    )
  }

}