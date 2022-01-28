const Square = (props) => {
  const {onClick, value} = props;
  return (
    <button className = "btn btn-primary" onClick={onClick} >
      {value}
    </button>
  );
}