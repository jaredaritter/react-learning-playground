import React from 'react';

class CountFour extends React.Component {
  constructor(props) {
    super(props);
    this.countByFour = this.countByFour.bind(this);
    this.state = {
      count: 0,
    };
  }

  countByFour() {
    this.setState({
      count: this.state.count + 4,
    });
  }

  render() {
    return (
      <div>
        <h3>Count By Four Component</h3>
        <button onClick={this.countByFour}>Quads please!</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default CountFour;
