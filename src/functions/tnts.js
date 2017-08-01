module.exports = (num) => {
  let a = Math.ceil(num / 4);
  let b = num % 4;
  let c, d;
  let e = a + 1;
  if (a === 13) {
    c = 'A';
  }
  else if (a === 12) {
    c = 'K';
  }
  else if (a === 11) {
    c = 'Q';
  }
  else if (a === 10) {
    c = 'J';
  }
  else if (a === 9) {
    c = 'T';
  } else {
    c = e.toString();
  }
  if (b === 1) {
    d = 'c';
  }
  else if (b === 2) {
    d = 'd';
  }
  else if (b === 3) {
    d = 'h'
  } else {
    d = 's';
  }
  let s = c + d;
  return s;
}
