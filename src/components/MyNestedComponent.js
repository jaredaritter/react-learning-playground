import React from 'react';
import ExtraNestedComponent from './ExtraNestedComponent';

class MyNestedComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.newClickBtn = this.newClickBtn.bind(this);
  }

  newClickBtn() {
    console.log('New button clicked');
  }

  render() {
    const { onButtonClicked } = this.props;

    return (
      <div className="white nested">
        <p>Something here</p>
        <button onClick={onButtonClicked}>Click Me!</button>
        <button onClick={this.newClickBtn}>New Button</button>
        <ExtraNestedComponent nonBoundClick={this.newClickBtn} />
      </div>
    );
  }
}

export default MyNestedComponent;
