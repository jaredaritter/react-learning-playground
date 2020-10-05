import React from 'react';

class DefaultProps extends React.Component {
  render() {
    const length = this.props.names.length;
    return (
      <div className="red">
        <h3>{this.props.title}</h3>
        <p>
          The names include:{' '}
          {this.props.names.map((name, i) => {
            return `${name}${i === length - 1 ? '' : ', '}`;
          })}
        </p>
        <p>
          {this.props.names.map(function namesIterator(item, i) {
            return 'Student' + (i + 1) + ': ' + item + (i !== 2 ? ', ' : '\n');
          })}
        </p>
      </div>
    );
  }
}

// ABLE TO ASSIGN DEFAULT PROPS TO CLASS COMPONENT OUTSIDE OF COMPONENT
DefaultProps.defaultProps = {
  title: 'Component made with default props',
  names: ['Ram', 'Alan', 'Lior', 'Lia'],
};

export default DefaultProps;
