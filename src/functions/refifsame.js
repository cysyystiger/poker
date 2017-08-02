module.exports = (arr) => {
  if (arr.length === 1) {
    return arr[0].cards[1];
  }
  else if (arr[0].value === 9) {
    if (arr[1].cards[1][0] - arr[0].cards[1][0] === 32) {
      return arr[0].cards[1];
    } else {
      return arr[1].cards[1];
    }
  }
  else if (arr[0].value === 8) {
    return arr[1].cards[1];
  }
  else if (arr[0].value === 7) {
    return arr[5].cards[1];
  }
  else if (arr[0].value === 6) {
    return arr[5].cards[1];
  }
  else if (arr[0].value === 5) {
    if (arr[0].cards[0][0] === arr[1].cards[0][0]) {
      return arr[1].cards[1];
    }
    else if (arr[1].cards[1][0] - arr[0].cards[1][0] > 7) {
      return arr[0].cards[1];
    } else {
      return arr[1].cards[1];
    }
  }
  else if (arr[0].value === 4) {
    return arr[2].cards[1];
  }
  else if (arr[0].value === 3) {
    if (arr.length === 2) {
      return arr[1].cards[1];
    } else {
      return arr[5].cards[1];
    }
  }
  else if (arr[0].value === 2) {
    return arr[3].cards[1];
  }
  else if (arr[0].value === 1) {
    return arr[5].cards[1];
  }
}
