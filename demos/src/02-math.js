function minus(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) return null;
  return a / b;
}

module.exports = {
  minus,
  mult,
  div,
};
