import { Component } from "react";

import Number from "./Number";
import Operator from "./Operator";
import Screen from "./Screen";

class Calculator extends Component {
  state = {
    first: null,
    operator: null,
    second: null,
  };

  handleNumberClick = (number) => {
    if (!this.state.operator) {
      this.setState({ first: `${this.state.first || ""}${number}` });
    } else {
      this.setState({ second: `${this.state.second || ""}${number}` });
    }
  };

  handleOperatorClick = (operator) => {
    if (operator === "=") {
      const first = parseInt(this.state.first);
      const second = parseInt(this.state.second);

      if (this.state.operator === "+") {
        this.setState({ operator: null, first: first + second, second: null });
      } else if (this.state.operator === "/") {
        this.setState({ operator: null, first: first / second, second: null });
      } else if (this.state.operator === "-") {
        this.setState({ operator: null, first: first - second, second: null });
      } else if (this.state.operator === "x") {
        this.setState({ operator: null, first: first * second, second: null });
      }

    } else if (operator === "C") {
      this.setState({ first: null, second: null, operator: null });
    } else {
      this.setState({ operator });
    }
  };

  getScreenValue = () => this.state.second || this.state.first;

  render() {
    return (
      <div class="calculator">
        <Screen value={this.getScreenValue()} />
        <Number value={0} onClick={this.handleNumberClick} />
        <Number value={1} onClick={this.handleNumberClick} />
        <Number value={2} onClick={this.handleNumberClick} />
        <Number value={3} onClick={this.handleNumberClick} />
        <Number value={4} onClick={this.handleNumberClick} />
        <Number value={5} onClick={this.handleNumberClick} />
        <Number value={6} onClick={this.handleNumberClick} />
        <Number value={7} onClick={this.handleNumberClick} />
        <Number value={8} onClick={this.handleNumberClick} />
        <Number value={9} onClick={this.handleNumberClick} />
        <button id="decimal-point" class="button number">.</button>
        <Operator value="+" id="add" onClick={this.handleOperatorClick} />
        <Operator value="/" id="divide" onClick={this.handleOperatorClick} />
        <Operator value="x" id="multiply" onClick={this.handleOperatorClick} />
        <Operator value="-" id="subtract" onClick={this.handleOperatorClick} />
        <Operator value="=" id="equals" onClick={this.handleOperatorClick} />
        <Operator value="C" id="clear" onClick={this.handleOperatorClick} />
      </div>
    );
  }
}

export default Calculator;
