module.exports = (num) => {
  const df;
  const a = Math.floor(num / 10000);
  if (a === 9) {
    return 'Straight Flush';
  }
  else if (a === 8) {
    return 'Four of a Kind';
  }
  else if (a === 7) {
    return 'Full House';
  }
  else if (a === 6) {
    return 'Flush';
  }
  else if (a === 5) {
    return 'Straight';
  }
  else if (a === 4) {
    return 'Three of a Kind';
  }
  else if (a === 3) {
    return 'Two Pairs';
  }
  else if (a === 2) {
    return 'One Pair';
  } else {
    return 'High Card';
  }
}
