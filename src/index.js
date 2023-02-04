module.exports = function check(str, bracketsConfig) {
  let x = [];
  let y = [];
  for (let i = 0; i < str.length / 2; i++) {
    x.push(str[i] + str[(str.length-1) - i]);
  }
  for (t of bracketsConfig) {
    y.push(t[0] + t[1]);
  }

  for(let j = 0; j < x.length; j++) {
    if(x[j] != y[j]) {
      return false;
    } else {
      return true;
    }
  }
}



