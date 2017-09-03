module.exports = (arr) => {
  let c;
  const n = arr.length;
  let b = arr[0].value;
  for (let i = 0; i < n; i += 1) {
    if (arr[i].value > b) {
      b = arr[i].value;
    }
  }
  for (let j = 0; j < n; j += 1) {
    if (b === arr[j].value) {
      return arr[j].cards;
    }
  }
}
