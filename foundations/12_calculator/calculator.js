const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  return array.reduce((accumulator,value)=>{
    return accumulator + value;
  },0)
};

const multiply = function(array) {
   return array.reduce((accumulator,value)=>{
    return accumulator * value;
  },1)
};

const power = function(base,exponent) {
  let product = 1;
	 for(i=1;i<=exponent;i++){
     product*=base;
   }
   return product;
};

const factorial = function(num) {
  let product = 1;
  for(i=num;i<=0;i--){
    product*=i;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
