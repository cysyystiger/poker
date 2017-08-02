import React, { Component } from 'react';
import PokerDecide from './poker_decide';
const tnts = require('../functions/tnts');
const ref = require('../functions/ref');
const ifsame = require('../functions/ifsame');
const refifsame = require('../functions/refifsame');

export default class PokerApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p1: { card: 0, pick: 0 },
      p2: { card: 0, pick: 0 },
      b1: { card: 0, pick: 0 },
      b2: { card: 0, pick: 0 },
      b3: { card: 0, pick: 0 },
      b4: { card: 0, pick: 0 },
      b5: { card: 0, pick: 0 }
    };
    this.dealcard = this.dealcard.bind(this);
    this.decide = this.decide.bind(this);
  }
  renderp1 = (card) => {
    if (!card.card) {
      if (!card.pick) {
        return <img src="/style/back.jpg" id="f" />;
      } else {
        return <img src="/style/back.jpg" id="fb" />;
      }
    } else {
      if (!card.pick) {
        return <img src={`/style/front/${card.card.toString()}.jpg`} id="f" />;
      } else {
        return <img src={`/style/front/${card.card.toString()}.jpg`} id="fb" />;
      }
    }
  }
  renderp2 = (card) => {
    if (!card.card) {
      if (!card.pick) {
        return <img src="/style/back.jpg" id="s" />;
      } else {
        return <img src="/style/back.jpg" id="sb" />;
      }
    } else {
      if (!card.pick) {
        return <img src={`/style/front/${card.card.toString()}.jpg`} id="s" />;
      } else {
        return <img src={`/style/front/${card.card.toString()}.jpg`} id="sb" />;
      }
    }
  }
  renderb1 = (card) => {
    if (!card.card) {
      if (!card.pick) {
        return <img src="/style/back.jpg" id="f" />;
      } else {
        return <img src="/style/back.jpg" id="fb" />;
      }
    } else {
      if (!card.pick) {
        return <img src={`/style/front/${card.card.toString()}.jpg`} id="f" />;
      } else {
        return <img src={`/style/front/${card.card.toString()}.jpg`} id="fb" />;
      }
    }
  }
  renderb2 = (card) => {
    if (!card.card) {
      if (!card.pick) {
        return <img src="/style/back.jpg" id="s" />;
      } else {
        return <img src="/style/back.jpg" id="sb" />;
      }
    } else {
      if (!card.pick) {
        return <img src={`/style/front/${card.card.toString()}.jpg`} id="s" />;
      } else {
        return <img src={`/style/front/${card.card.toString()}.jpg`} id="sb" />;
      }
    }
  }
  renderb3 = (card) => {
    if (!card.card) {
      if (!card.pick) {
        return <img src="/style/back.jpg" id="s" />;
      } else {
        return <img src="/style/back.jpg" id="sb" />;
      }
    } else {
      if (!card.pick) {
        return <img src={`/style/front/${card.card.toString()}.jpg`} id="s" />;
      } else {
        return <img src={`/style/front/${card.card.toString()}.jpg`} id="sb" />;
      }
    }
  }
  renderb4 = (card) => {
    if (!card.card) {
      if (!card.pick) {
        return <img src="/style/back.jpg" id="s" />;
      } else {
        return <img src="/style/back.jpg" id="sb" />;
      }
    } else {
      if (!card.pick) {
        return <img src={`/style/front/${card.card.toString()}.jpg`} id="s" />;
      } else {
        return <img src={`/style/front/${card.card.toString()}.jpg`} id="sb" />;
      }
    }
  }
  renderb5 = (card) => {
    if (!card.card) {
      if (!card.pick) {
        return <img src="/style/back.jpg" id="s" />;
      } else {
        return <img src="/style/back.jpg" id="sb" />;
      }
    } else {
      if (!card.pick) {
        return <img src={`/style/front/${card.card.toString()}.jpg`} id="s" />;
      } else {
        return <img src={`/style/front/${card.card.toString()}.jpg`} id="sb" />;
      }
    }
  }
  dealcard = () => {
    if (!this.state.p1.card) {
      let a = [0,0,0,0,0];
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
      this.setState(
        {
          p1: { card: a[0] },
          p2: { card: a[1] },
          b1: { card: a[2] },
          b2: { card: a[3] },
          b3: { card: a[4] },
        }
      );
    }
    else if (!this.state.b4.card) {
      let a = [this.state.p1.card, this.state.p2.card, this.state.b1.card, this.state.b2.card, this.state.b3.card, 0];
      let b = 1, r;
      while (b) {
        let c = 0;
        r = Math.floor(Math.random() * 52 + 1);
        for (let i = 0; i < 5; i++) {
          if (a[i] === r) {
            c++;
          }
        }
        if (!c) {
          a[5] = r;
          b = 0;
        }
      }
      this.setState({ b4: { card: a[5] } });
    } else {
      let a = [this.state.p1.card, this.state.p2.card, this.state.b1.card, this.state.b2.card, this.state.b3.card, this.state.b4.card, 0];
      let b = 1, r;
      while (b) {
        let c = 0;
        r = Math.floor(Math.random() * 52 + 1);
        for (let i = 0; i < 6; i++) {
          if (a[i] === r) {
            c++;
          }
        }
        if (!c) {
          a[6] = r;
          b = 0;
        }
      }
      this.setState({ b5: { card: a[6] } });
    }
  }
  decide = (cards) => {
    if (cards.p1.card !== 0 && cards.b4.card === 0) {
      let s = ['','','','',''];
      let n = [0,0,0,0,0];
      let j = 0;
      for (let i = 52; i > 0; i--) {
        if ( i === cards.p1.card ||
             i === cards.p2.card ||
             i === cards.b1.card ||
             i === cards.b2.card ||
             i === cards.b3.card
           ) {
             s[j] = tnts(i);
             n[j] = i;
             j++;
           }
      }
      console.log(ref(s, n));
      this.setState(
        {
          p1: { card: cards.p1.card, pick: 1 },
          p2: { card: cards.p2.card, pick: 1 },
          b1: { card: cards.b1.card, pick: 1 },
          b2: { card: cards.b2.card, pick: 1 },
          b3: { card: cards.b3.card, pick: 1 }
        }
      );
    }
    else if (cards.b4.card !== 0 && cards.b5.card === 0) {
      let s = ['','','','','','']; let n = [0,0,0,0,0,0];
      let ts1 = ['','','','','','']; let tn1 = [0,0,0,0,0,0];
      let ts2 = ['','','','','','']; let tn2 = [0,0,0,0,0,0];
      let ts3 = ['','','','','','']; let tn3 = [0,0,0,0,0,0];
      let ts4 = ['','','','','','']; let tn4 = [0,0,0,0,0,0];
      let ts5 = ['','','','','','']; let tn5 = [0,0,0,0,0,0];
      let ts6 = ['','','','','','']; let tn6 = [0,0,0,0,0,0];
      let j = 0;
      for (let i = 52; i > 0; i--) {
        if ( i === cards.p1.card ||
             i === cards.p2.card ||
             i === cards.b1.card ||
             i === cards.b2.card ||
             i === cards.b3.card ||
             i === cards.b4.card
           ) {
             s[j] = tnts(i); n[j] = i;
             ts1[j] = tnts(i); tn1[j] = i; ts2[j] = tnts(i); tn2[j] = i;
             ts3[j] = tnts(i); tn3[j] = i; ts4[j] = tnts(i); tn4[j] = i;
             ts5[j] = tnts(i); tn5[j] = i; ts6[j] = tnts(i); tn6[j] = i;
             j++;
           }
      }
      s.splice(0,1); n.splice(0,1); let s1 = s; let n1 = n; s = ts1; n = tn1;
      s.splice(1,1); n.splice(1,1); let s2 = s; let n2 = n; s = ts2; n = tn2;
      s.splice(2,1); n.splice(2,1); let s3 = s; let n3 = n; s = ts3; n = tn3;
      s.splice(3,1); n.splice(3,1); let s4 = s; let n4 = n; s = ts4; n = tn4;
      s.splice(4,1); n.splice(4,1); let s5 = s; let n5 = n; s = ts5; n = tn5;
      s.splice(5,1); n.splice(5,1); let s6 = s; let n6 = n; s = ts6; n = tn6;
      console.log(Math.max(ref(s1, n1), ref(s2, n2), ref(s3, n3), ref(s4, n4), ref(s5, n5), ref(s6, n6)));
      let same = ifsame(
        { cards: [s1, n1], value: ref(s1, n1) },
        { cards: [s2, n2], value: ref(s2, n2) },
        { cards: [s3, n3], value: ref(s3, n3) },
        { cards: [s4, n4], value: ref(s4, n4) },
        { cards: [s5, n5], value: ref(s5, n5) },
        { cards: [s6, n6], value: ref(s6, n6) }
      );
      let numarray = refifsame(same);
      let sum = 0;
      for (let i = 0;i < 5;i++) {
        sum = sum + numarray[i];
      }
      if (sum === cards.p1.card + cards.p2.card + cards.b1.card + cards.b2.card + cards.b3.card) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 0 }
          }
        );
      }
      else if (sum === cards.p1.card + cards.p2.card + cards.b1.card + cards.b2.card + cards.b4.card) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 0 },
            b4: { card: cards.b4.card, pick: 1 }
          }
        );
      }
      else if (sum === cards.p1.card + cards.p2.card + cards.b1.card + cards.b3.card + cards.b4.card) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 0 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 1 }
          }
        );
      }
      else if (sum === cards.p1.card + cards.p2.card + cards.b2.card + cards.b3.card + cards.b4.card) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 0 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 1 }
          }
        );
      }
      else if (sum === cards.p1.card + cards.b1.card + cards.b2.card + cards.b3.card + cards.b4.card) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 0 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 1 }
          }
        );
      } else {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 0 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 1 }
          }
        );
      }

    }
    else if (cards.b4.card !== 0 && cards.b5.card !== 0) {

    }
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.dealcard} type="submit" className="btn btn-primary" >
            發牌
          </button>
          <PokerDecide cards={this.state} decide={cards => this.decide(cards)} />
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
