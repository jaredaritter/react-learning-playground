import React from 'react';
import Clock from './components/Clock';

class App2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <hr />
        <h2>Second App</h2>
        <Clock />
      </div>
    );
  }
}

export default App2;
