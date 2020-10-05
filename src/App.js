import React from 'react';
import MyComponent from './components/MyComponent';
import Counter from './components/Counter';
import CountFour from './components/CountFour';
import BindPractice from './components/BindPractice';
import FunctionalComponent from './components/FunctionalComponents';
import Clock from './components/Clock';
import DefaultProps from './components/DefaultProps';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.countBy2 = this.countBy2.bind(this);
    this.countUp = this.countUp.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
    this.triple = this.triple.bind(this);
    this.state = {
      count: 0,
      count2: 0,
      count3: 0,
    };
  }

  callback() {
    console.log('App count state updated');
  }

  countUp() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      this.callback
    );
  }

  countBy2() {
    this.setState({
      count2: this.state.count2 + 2,
    });
  }

  diffClickBtn = () => console.log('Different button clicked!');

  onClickBtn() {
    console.log('Button has been clicked');
  }

  triple() {
    this.setState({
      count3: this.state.count3 + 3,
    });
  }

  render() {
    return (
      <div>
        <MyComponent
          title="React"
          onButtonClicked={this.onClickBtn}
          diffButtonClicked={this.diffClickBtn}
        />
        <div>
          <h3>Counter in App Component</h3>
          <button onClick={this.countUp}>Increment Count!</button>
          <p>{this.state.count}</p>
        </div>
        <Counter />
        <div>
          <h3>Count by twos</h3>
          <button onClick={this.countBy2}>Double it!</button>
          <p>{this.state.count2}</p>
        </div>
        <div>
          <h3>Count by threes</h3>
          <button onClick={this.triple}>Triple me!</button>
          <p>{this.state.count3}</p>
        </div>
        <CountFour />
        <BindPractice />
        <FunctionalComponent title="Functional Component" />
        <Clock />
        <DefaultProps />
      </div>
    );
  }
}

export default App;
