
// sum
const sum = (accumulator, currentValue) => accumulator + currentValue;
// mul
const mul = (accumulator, currentValue) => accumulator * currentValue;
//reverse a string 
function reverse(s) {
  return s.split('').reverse().join('');
}


function longword(s,i) {
	var word=s.filter(s => s.length > i);
  return word;
}

