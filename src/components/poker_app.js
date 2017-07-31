import React, { Component } from 'react';

export default class PokerApp extends Component {
  constructor(props) {
    super(props);
    this.state = { p1: 0, p2: 0, b1: 0, b2: 0, b3: 0, b4: 0, b5: 0 };
    this.dealcard = this.dealcard.bind(this);
  }
  renderp1 = (card) => {
    if (card === 0) {
      return <img src="/style/back.jpg" id="f" />;
    } else {
      return <img src={`/style/front/${card.toString()}.jpg`} id="f" />;
    }
  }
  renderp2 = (card) => {
    if (!card) {
      return <img src="/style/back.jpg" id="s" />;
    } else {
      return <img src={`/style/front/${card.toString()}.jpg`} id="s" />;
    }
  }
  renderb1 = (card) => {
    if (!card) {
      return <img src="/style/back.jpg" id="f" />;
    } else {
      return <img src={`/style/front/${card.toString()}.jpg`} id="f" />;
    }
  }
  renderb2 = (card) => {
    if (!card) {
      return <img src="/style/back.jpg" id="s" />;
    } else {
      return <img src={`/style/front/${card.toString()}.jpg`} id="s" />;
    }
  }
  renderb3 = (card) => {
    if (!card) {
      return <img src="/style/back.jpg" id="s" />;
    } else {
      return <img src={`/style/front/${card.toString()}.jpg`} id="s" />;
    }
  }
  renderb4 = (card) => {
    if (!card) {
      return <img src="/style/back.jpg" id="s" />;
    } else {
      return <img src={`/style/front/${card.toString()}.jpg`} id="s" />;
    }
  }
  renderb5 = (card) => {
    if (!card) {
      return <img src="/style/back.jpg" id="s" />;
    } else {
      return <img src={`/style/front/${card.toString()}.jpg`} id="s" />;
    }
  }
  dealcard = () => {
    let a = [0,0,0,0,0,0,0];
    if (!this.state.p1) {
      let i = 0, r;
      while (i < 5) {
        r = Math.floor(Math.random() * 52 + 1);
        let c = 0;
        for (let j = 0; j < i; j++) {
          if (a[j] === r) {
            c++;
          }
        }
        if (!c) {
          a[i] = r;
          i++;
        }
      };
      this.setState({ p1: a[0], p2: a[1], b1: a[2], b2: a[3], b3: a[4] });
    }
    else if (!this.state.b4) {
      let b = 1, r;
      while (b) {
        let c = 0;
        for (let i = 0; i < 5; i++) {
          r = Math.floor(Math.random() * 52 + 1);
          if (a[i] === r) {
            c++;
          }
        }
        if (!c) {
          a[5] = r;
          b = 0;
        }
      }
      this.setState({ b4: a[5] });
    } else {
      let b = 1, r;
      while (b) {
        let c = 0;
        for (let i = 0; i < 6; i++) {
          r = Math.floor(Math.random() * 52 + 1);
          if (a[i] === r) {
            c++;
          }
        }
        if (!c) {
          a[6] = r;
          b = 0;
        }
      }
      this.setState({ b5: a[6] });
    }
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.dealcard} type="submit" className="btn btn-primary" >
              發牌
          </button>
          <button type="submit" id="b" className="btn btn-primary" >
              最大牌型
          </button>
        </div>
        <div>
          <div>
            {this.renderp1(this.state.p1)}
            {this.renderp2(this.state.p2)}
          </div>
          <div>
            {this.renderb1(this.state.b1)}
            {this.renderb2(this.state.b2)}
            {this.renderb3(this.state.b3)}
            {this.renderb4(this.state.b4)}
            {this.renderb5(this.state.b5)}
          </div>
        </div>
      </div>
    );
  }
}
