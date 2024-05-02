//A simple calculator function in JS using switch statement

function calc(num1, num2, operator){
    switch(operator){
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        case '/':
            return num1/num2;
        default:
            throw new Error('Invalid operator');
    }
}


module.exports = calc;

/*
console.log(calc(1,2,'+'));
console.log(calc(3,2,'-'));
console.log(calc(3,4,'*'));
console.log(calc(5,2,'/'));

*/
