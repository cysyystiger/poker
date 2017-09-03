import React, { Component } from 'react';
import PokerDecide from './poker_decide';
const tnts = require('../functions/tnts');
const ref = require('../functions/ref');
const maxcards = require('../functions/maxcards');
const renderpoker = require('../functions/renderpoker');

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
      b5: { card: 0, pick: 0 },
      poker: '',
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
          b3: { card: cards.b3.card, pick: 1 },
          poker: renderpoker(ref(s, n)),
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
      const maxpoker = Math.max(ref(s1, n1), ref(s2, n2), ref(s3, n3), ref(s4, n4), ref(s5, n5), ref(s6, n6));
      this.setState({
        poker: renderpoker(maxpoker)
      });
      const result = maxcards(
        [
          { value: ref(s1, n1), cards: n1 },
          { value: ref(s2, n2), cards: n2 },
          { value: ref(s3, n3), cards: n3 },
          { value: ref(s4, n4), cards: n4 },
          { value: ref(s5, n5), cards: n5 },
          { value: ref(s6, n6), cards: n6 },
        ]
      );
      let sum = 0;
      for (let i = 0;i < 5;i++) {
        sum = sum + result[i];
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
      let s = ['','','','','','','']; let n = [0,0,0,0,0,0];
      let ts1 = ['','','','','','','']; let tn1 = [0,0,0,0,0,0,0];
      let ts2 = ['','','','','','','']; let tn2 = [0,0,0,0,0,0,0];
      let ts3 = ['','','','','','','']; let tn3 = [0,0,0,0,0,0,0];
      let ts4 = ['','','','','','','']; let tn4 = [0,0,0,0,0,0,0];
      let ts5 = ['','','','','','','']; let tn5 = [0,0,0,0,0,0,0];
      let ts6 = ['','','','','','','']; let tn6 = [0,0,0,0,0,0,0];
      let ts7 = ['','','','','','','']; let tn7 = [0,0,0,0,0,0,0];
      let ts8 = ['','','','','','','']; let tn8 = [0,0,0,0,0,0,0];
      let ts9 = ['','','','','','','']; let tn9 = [0,0,0,0,0,0,0];
      let ts10 = ['','','','','','','']; let tn10 = [0,0,0,0,0,0,0];
      let ts11 = ['','','','','','','']; let tn11 = [0,0,0,0,0,0,0];
      let ts12 = ['','','','','','','']; let tn12 = [0,0,0,0,0,0,0];
      let ts13 = ['','','','','','','']; let tn13 = [0,0,0,0,0,0,0];
      let ts14 = ['','','','','','','']; let tn14 = [0,0,0,0,0,0,0];
      let ts15 = ['','','','','','','']; let tn15 = [0,0,0,0,0,0,0];
      let ts16 = ['','','','','','','']; let tn16 = [0,0,0,0,0,0,0];
      let ts17 = ['','','','','','','']; let tn17 = [0,0,0,0,0,0,0];
      let ts18 = ['','','','','','','']; let tn18 = [0,0,0,0,0,0,0];
      let ts19 = ['','','','','','','']; let tn19 = [0,0,0,0,0,0,0];
      let ts20 = ['','','','','','','']; let tn20 = [0,0,0,0,0,0,0];
      let ts21 = ['','','','','','','']; let tn21 = [0,0,0,0,0,0,0];
      let j = 0;
      for (let i = 52; i > 0; i--) {
        if ( i === cards.p1.card ||
             i === cards.p2.card ||
             i === cards.b1.card ||
             i === cards.b2.card ||
             i === cards.b3.card ||
             i === cards.b4.card ||
             i === cards.b5.card
           ) {
             s[j] = tnts(i); n[j] = i;
             ts1[j] = tnts(i); tn1[j] = i; ts2[j] = tnts(i); tn2[j] = i;
             ts3[j] = tnts(i); tn3[j] = i; ts4[j] = tnts(i); tn4[j] = i;
             ts5[j] = tnts(i); tn5[j] = i; ts6[j] = tnts(i); tn6[j] = i;
             ts7[j] = tnts(i); tn7[j] = i; ts8[j] = tnts(i); tn8[j] = i;
             ts9[j] = tnts(i); tn9[j] = i; ts10[j] = tnts(i); tn10[j] = i;
             ts11[j] = tnts(i); tn11[j] = i; ts12[j] = tnts(i); tn12[j] = i;
             ts13[j] = tnts(i); tn13[j] = i; ts14[j] = tnts(i); tn14[j] = i;
             ts15[j] = tnts(i); tn15[j] = i; ts16[j] = tnts(i); tn16[j] = i;
             ts17[j] = tnts(i); tn17[j] = i; ts18[j] = tnts(i); tn18[j] = i;
             ts19[j] = tnts(i); tn19[j] = i; ts20[j] = tnts(i); tn20[j] = i;
             ts21[j] = tnts(i); tn21[j] = i;
             j++;
           }
      }
      s.splice(0,1); s.splice(0,1); n.splice(0,1); n.splice(0,1);
      let s1 = s; let n1 = n; s = ts1; n = tn1;
      s.splice(0,1); s.splice(1,1); n.splice(0,1); n.splice(1,1);
      let s2 = s; let n2 = n; s = ts2; n = tn2;
      s.splice(0,1); s.splice(2,1); n.splice(0,1); n.splice(2,1);
      let s3 = s; let n3 = n; s = ts3; n = tn3;
      s.splice(0,1); s.splice(3,1); n.splice(0,1); n.splice(3,1);
      let s4 = s; let n4 = n; s = ts4; n = tn4;
      s.splice(0,1); s.splice(4,1); n.splice(0,1); n.splice(4,1);
      let s5 = s; let n5 = n; s = ts5; n = tn5;
      s.splice(0,1); s.splice(5,1); n.splice(0,1); n.splice(5,1);
      let s6 = s; let n6 = n; s = ts6; n = tn6;
      s.splice(1,1); s.splice(1,1); n.splice(1,1); n.splice(1,1);
      let s7 = s; let n7 = n; s = ts7; n = tn7;
      s.splice(1,1); s.splice(2,1); n.splice(1,1); n.splice(2,1);
      let s8 = s; let n8 = n; s = ts8; n = tn8;
      s.splice(1,1); s.splice(3,1); n.splice(1,1); n.splice(3,1);
      let s9 = s; let n9 = n; s = ts9; n = tn9;
      s.splice(1,1); s.splice(4,1); n.splice(1,1); n.splice(4,1);
      let s10 = s; let n10 = n; s = ts10; n = tn10;
      s.splice(1,1); s.splice(5,1); n.splice(1,1); n.splice(5,1);
      let s11 = s; let n11 = n; s = ts11; n = tn11;
      s.splice(2,1); s.splice(2,1); n.splice(2,1); n.splice(2,1);
      let s12 = s; let n12 = n; s = ts12; n = tn12;
      s.splice(2,1); s.splice(3,1); n.splice(2,1); n.splice(3,1);
      let s13 = s; let n13 = n; s = ts13; n = tn13;
      s.splice(2,1); s.splice(4,1); n.splice(2,1); n.splice(4,1);
      let s14 = s; let n14 = n; s = ts14; n = tn14;
      s.splice(2,1); s.splice(5,1); n.splice(2,1); n.splice(5,1);
      let s15 = s; let n15 = n; s = ts15; n = tn15;
      s.splice(3,1); s.splice(3,1); n.splice(3,1); n.splice(3,1);
      let s16 = s; let n16 = n; s = ts16; n = tn16;
      s.splice(3,1); s.splice(4,1); n.splice(3,1); n.splice(4,1);
      let s17 = s; let n17 = n; s = ts17; n = tn17;
      s.splice(3,1); s.splice(5,1); n.splice(3,1); n.splice(5,1);
      let s18 = s; let n18 = n; s = ts18; n = tn18;
      s.splice(4,1); s.splice(4,1); n.splice(4,1); n.splice(4,1);
      let s19 = s; let n19 = n; s = ts19; n = tn19;
      s.splice(4,1); s.splice(5,1); n.splice(4,1); n.splice(5,1);
      let s20 = s; let n20 = n; s = ts20; n = tn20;
      s.splice(5,1); s.splice(5,1); n.splice(5,1); n.splice(5,1);
      let s21 = s; let n21 = n; s = ts21; n = tn21;
      console.log(
        Math.max(
          ref(s1, n1), ref(s2, n2), ref(s3, n3), ref(s4, n4), ref(s5, n5),
          ref(s6, n6), ref(s7, n7), ref(s8, n8), ref(s9, n9), ref(s10, n10),
          ref(s11, n11), ref(s12, n12), ref(s13, n13), ref(s14, n14), ref(s15, n15),
          ref(s16, n16), ref(s17, n17), ref(s18, n18), ref(s19, n19), ref(s20, n20),
          ref(s21, n21)
        )
      );
      const maxpoker = Math.max(
        ref(s1, n1), ref(s2, n2), ref(s3, n3), ref(s4, n4), ref(s5, n5),
        ref(s6, n6), ref(s7, n7), ref(s8, n8), ref(s9, n9), ref(s10, n10),
        ref(s11, n11), ref(s12, n12), ref(s13, n13), ref(s14, n14), ref(s15, n15),
        ref(s16, n16), ref(s17, n17), ref(s18, n18), ref(s19, n19), ref(s20, n20),
        ref(s21, n21)
      );
      this.setState({
        poker: renderpoker(maxpoker)
      });
      const result = maxcards(
        [
          { value: ref(s1, n1), cards: n1 },
          { value: ref(s2, n2), cards: n2 },
          { value: ref(s3, n3), cards: n3 },
          { value: ref(s4, n4), cards: n4 },
          { value: ref(s5, n5), cards: n5 },
          { value: ref(s6, n6), cards: n6 },
          { value: ref(s7, n7), cards: n7 },
          { value: ref(s8, n8), cards: n8 },
          { value: ref(s9, n9), cards: n9 },
          { value: ref(s10, n10), cards: n10 },
          { value: ref(s11, n11), cards: n11 },
          { value: ref(s12, n12), cards: n12 },
          { value: ref(s13, n13), cards: n13 },
          { value: ref(s14, n14), cards: n14 },
          { value: ref(s15, n15), cards: n15 },
          { value: ref(s16, n16), cards: n16 },
          { value: ref(s17, n17), cards: n17 },
          { value: ref(s18, n18), cards: n18 },
          { value: ref(s19, n19), cards: n19 },
          { value: ref(s20, n20), cards: n20 },
          { value: ref(s21, n21), cards: n21 },
        ]
      );
      const all = [
        cards.p1.card,
        cards.p2.card,
        cards.b1.card,
        cards.b2.card,
        cards.b3.card,
        cards.b4.card,
        cards.b5.card,
      ];
      const leave = [];
      for (let c = 0; c < 7; c += 1) {
        if (
          all[c] !== result[0] &&
          all[c] !== result[1] &&
          all[c] !== result[2] &&
          all[c] !== result[3] &&
          all[c] !== result[4]
        ) {
          leave.push(all[c]);
        }
      }
      let i;
      if (cards.p1.card === leave[0] && cards.p2.card === leave[1]) {
        i = 1;
      }
      else if (cards.p1.card === leave[0] && cards.b1.card === leave[1]) {
        i = 2;
      }
      else if (cards.p1.card === leave[0] && cards.b2.card === leave[1]) {
        i = 3;
      }
      else if (cards.p1.card === leave[0] && cards.b3.card === leave[1]) {
        i = 4;
      }
      else if (cards.p1.card === leave[0] && cards.b4.card === leave[1]) {
        i = 5;
      }
      else if (cards.p1.card === leave[0] && cards.b5.card === leave[1]) {
        i = 6;
      }
      else if (cards.p2.card === leave[0] && cards.b1.card === leave[1]) {
        i = 7;
      }
      else if (cards.p2.card === leave[0] && cards.b2.card === leave[1]) {
        i = 8;
      }
      else if (cards.p2.card === leave[0] && cards.b3.card === leave[1]) {
        i = 9;
      }
      else if (cards.p2.card === leave[0] && cards.b4.card === leave[1]) {
        i = 10;
      }
      else if (cards.p2.card === leave[0] && cards.b5.card === leave[1]) {
        i = 11;
      }
      else if (cards.b1.card === leave[0] && cards.b2.card === leave[1]) {
        i = 12;
      }
      else if (cards.b1.card === leave[0] && cards.b3.card === leave[1]) {
        i = 13;
      }
      else if (cards.b1.card === leave[0] && cards.b4.card === leave[1]) {
        i = 14;
      }
      else if (cards.b1.card === leave[0] && cards.b5.card === leave[1]) {
        i = 15;
      }
      else if (cards.b2.card === leave[0] && cards.b3.card === leave[1]) {
        i = 16;
      }
      else if (cards.b2.card === leave[0] && cards.b4.card === leave[1]) {
        i = 17;
      }
      else if (cards.b2.card === leave[0] && cards.b5.card === leave[1]) {
        i = 18;
      }
      else if (cards.b3.card === leave[0] && cards.b4.card === leave[1]) {
        i = 19;
      }
      else if (cards.b3.card === leave[0] && cards.b5.card === leave[1]) {
        i = 20;
      } else {
        i = 21;
      }
      if (i === 1) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 0 },
            p2: { card: cards.p2.card, pick: 0 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 1 },
            b5: { card: cards.b5.card, pick: 1 },
          }
        );
      }
      else if (i === 2) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 0 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 0 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 1 },
            b5: { card: cards.b5.card, pick: 1 },
          }
        );
      }
      else if (i === 3) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 0 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 0 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 1 },
            b5: { card: cards.b5.card, pick: 1 },
          }
        );
      }
      else if (i === 4) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 0 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 0 },
            b4: { card: cards.b4.card, pick: 1 },
            b5: { card: cards.b5.card, pick: 1 },
          }
        );
      }
      else if (i === 5) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 0 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 0 },
            b5: { card: cards.b5.card, pick: 1 },
          }
        );
      }
      else if (i === 6) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 0 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 1 },
            b5: { card: cards.b5.card, pick: 0 },
          }
        );
      }
      else if (i === 7) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 0 },
            b1: { card: cards.b1.card, pick: 0 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 1 },
            b5: { card: cards.b5.card, pick: 1 },
          }
        );
      }
      else if (i === 8) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 0 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 0 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 1 },
            b5: { card: cards.b5.card, pick: 1 },
          }
        );
      }
      else if (i === 9) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 0 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 0 },
            b4: { card: cards.b4.card, pick: 1 },
            b5: { card: cards.b5.card, pick: 1 },
          }
        );
      }
      else if (i === 10) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 0 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 0 },
            b5: { card: cards.b5.card, pick: 1 },
          }
        );
      }
      else if (i === 11) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 0 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 1 },
            b5: { card: cards.b5.card, pick: 0 },
          }
        );
      }
      else if (i === 12) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 0 },
            b2: { card: cards.b2.card, pick: 0 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 1 },
            b5: { card: cards.b5.card, pick: 1 },
          }
        );
      }
      else if (i === 13) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 0 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 0 },
            b4: { card: cards.b4.card, pick: 1 },
            b5: { card: cards.b5.card, pick: 1 },
          }
        );
      }
      else if (i === 14) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 0 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 0 },
            b5: { card: cards.b5.card, pick: 1 },
          }
        );
      }
      else if (i === 15) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 0 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 1 },
            b5: { card: cards.b5.card, pick: 0 },
          }
        );
      }
      else if (i === 16) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 0 },
            b3: { card: cards.b3.card, pick: 0 },
            b4: { card: cards.b4.card, pick: 1 },
            b5: { card: cards.b5.card, pick: 1 },
          }
        );
      }
      else if (i === 17) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 0 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 0 },
            b5: { card: cards.b5.card, pick: 1 },
          }
        );
      }
      else if (i === 18) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 0 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 1 },
            b5: { card: cards.b5.card, pick: 0 },
          }
        );
      }
      else if (i === 19) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 0 },
            b4: { card: cards.b4.card, pick: 0 },
            b5: { card: cards.b5.card, pick: 1 },
          }
        );
      }
      else if (i === 20) {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 0 },
            b4: { card: cards.b4.card, pick: 1 },
            b5: { card: cards.b5.card, pick: 0 },
          }
        );
      } else {
        this.setState(
          {
            p1: { card: cards.p1.card, pick: 1 },
            p2: { card: cards.p2.card, pick: 1 },
            b1: { card: cards.b1.card, pick: 1 },
            b2: { card: cards.b2.card, pick: 1 },
            b3: { card: cards.b3.card, pick: 1 },
            b4: { card: cards.b4.card, pick: 0 },
            b5: { card: cards.b5.card, pick: 0 },
          }
        );
      }
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
        <div>
          {this.state.poker}
        </div>
      </div>
    );
  }
}
