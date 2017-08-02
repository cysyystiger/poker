module.exports = (a, b, c, d, e, f) => {
  let arr = [];
  if (a.value >= Math.max(b.value, c.value, d.value, e.value, f.value)) {
    arr.push(a);
  }
  if (b.value >= Math.max(a.value, c.value, d.value, e.value, f.value)) {
    arr.push(b);
  }
  if (c.value >= Math.max(b.value, a.value, d.value, e.value, f.value)) {
    arr.push(c);
  }
  if (d.value >= Math.max(b.value, c.value, a.value, e.value, f.value)) {
    arr.push(d);
  }
  if (e.value >= Math.max(b.value, c.value, d.value, a.value, f.value)) {
    arr.push(e);
  }
  if (f.value >= Math.max(b.value, c.value, d.value, e.value, a.value)) {
    arr.push(f);
  }
  return arr;
}
