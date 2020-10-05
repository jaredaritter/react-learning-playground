import React from 'react';

function Button(props) {
  return (
    <button type="button" onClick={props.onButtonClick}>
      Outside function component using bound
    </button>
  );
}

class BindPractice extends React.Component {
  constructor(props) {
    super(props);
    this.boundHandleClick = this.boundHandleClick.bind(this);
  }

  boundHandleClick(event) {
    console.log(this); // 'this' is bound to the Class BindPractice
  }

  unboundHandleClick(event) {
    console.log(this); // 'this' is unbound
  }

  render() {
    return (
      <div className="border">
        <h3>Bind Stuff</h3>
        <button type="button" onClick={this.boundHandleClick}>
          Bound
        </button>
        <button type="button" onClick={this.unboundHandleClick}>
          Unbound
        </button>
        <Button onButtonClick={this.boundHandleClick} />
      </div>
    );
  }
}

export default BindPractice;
