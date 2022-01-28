const ChoosePlayer = (props) => {
  const {onClick, player } = props;
  
  if(player) {
    return  null;
  }

  return (
    <div className = "game">
      <div className = "board-row">
        <Square value ="X"  onClick={onClick("X")}/>
        <Square value ="O"  onClick={onClick("O")}/>
      </div>
    </div>
  )
}