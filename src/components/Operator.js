import { Component } from 'react';
const classNames = require('classnames');

const operatorClasses = [
  {
    button: true,
    operator: true
  }
]

class Operator extends Component {
  render() {
    const {id, value} = this.props;
    return (
      <button 
        id={id}
        className={classNames(operatorClasses)}
        onClick={() => this.props.onClick(value)}>

        {value}

      </button>
    );
  }
}

export default Operator;
