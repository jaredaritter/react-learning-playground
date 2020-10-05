import React from 'react';

function Square() {
  return <div className="square"></div>;
}

function Block() {
  return (
    <div>
      {/* classname not working because assignment inside function declaration takes precedence! */}
      <Square className="white" />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

class ExtraNestedComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="blue nested">
        <p>More writing</p>
        <button onClick={this.props.nonBoundClick}>Clicky</button>
        <Block />
      </div>
    );
  }
}

export default ExtraNestedComponent;
