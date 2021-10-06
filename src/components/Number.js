import { Component } from 'react';
const classNames = require('classnames');

const numberClasses = [
  {
    button: true,
    number: true
  }
]

class Number extends Component {
  render() {
    const {value} = this.props;
    return ( 
      <button 
        id={`_${value}`} 
        className={classNames(numberClasses)} 
        onClick={() => this.props.onClick(value)}>

        {value}

      </button>
    );
  }
}

export default Number;
