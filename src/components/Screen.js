import { Component } from 'react';

class Screen extends Component {
  render() {
    return (
      <div className="screen">{ this.props.value || '0'}</div>
    );
  }
}

export default Screen;
