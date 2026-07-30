const repeatString = function(string, repetition) {
    let repeatString ='';
    if(repetition>=0){
        for(i=0;i<repetition;i++){
            repeatString+=string;
        }
        return repeatString;
    }else{
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;
