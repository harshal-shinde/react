import React from 'react';
import ListItem from './ListItem';

//Parent component
export class Table extends React.Component {
  state = {
    data : tableData
  }

  getData = (rowData) => {
    console.log(rowData);
  }

  render (){
    return (
      <div>
        {this.state.data.map (item => (
          <ListItem rowData= {item} handleClick = {this.getData} />
        ))}
      </div>
    );
  }
}

//Child component
import React from 'react';

const ListItem = (props) => {
  return (
    <div onClick={() => props.handleClick(props.rowData)}>
      <p>{props.rowData.company}</p>
      <p>{props.rowData.contact}</p>
      <p>{props.rowData.country}</p>
    </div>
  );
}



