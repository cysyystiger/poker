import React, { Component } from 'react';

export default class PokerDecide extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.decide = this.decide.bind(this);
  }
  decide = () => {
    this.props.decide(this.props.cards);
  }


  render() {
    return (
      <button onClick={this.decide} type="submit" id="b" className="btn btn-primary" >
        最大牌型
      </button>
    );
  }
}
