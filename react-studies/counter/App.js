import React, { Component } from "React";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {count : 1}
  }

  handleCount(value) {
    this.setState((prevState) => ({count : prevState.count + value }));
  }

  render() {
    return (
      <div>
        Current count : {this.state.count}
        <hr />
      </div>
    );
  }
}