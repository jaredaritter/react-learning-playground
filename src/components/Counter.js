import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  // ARROW FUNCTIONS WORK WITHOUT NEEDING TO BIND THIS. HAS SOME DOWNSIDES
  // countUp = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };

  render() {
    return (
      <div>
        <h3>Counter Component</h3>
        <button onClick={this.countUp}>Increment Count!</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default Counter;
