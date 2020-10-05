import React, { Component } from 'react';
import MyNestedComponent from './MyNestedComponent';

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, onButtonClicked, diffButtonClicked } = this.props;

    return (
      <div className="blue nested">
        <h1>{title}</h1>
        <button onClick={onButtonClicked}>Click Me!</button>
        <button onClick={diffButtonClicked}>No Click me!</button>
        <MyNestedComponent onButtonClicked={onButtonClicked} />
      </div>
    );
  }
}

export default MyComponent;
