const sumAll = function(num1,num2) {
    let max;
    let min;
    
    if(num1<0||num2<0||!Number.isInteger(num1)||!Number.isInteger(num2)){
        return 'ERROR';
    }

    if(num1<num2){
        min = num1;
        max = num2;
    }else{
        min = num2;
        max = num1;
    }

    let sum = 0;

    for(i=min;i<=max;i++){
        sum+=i;
        console.log(sum);
    }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
