function BiggerNum(num1, num2){
    if(num1>num2){
        return(num1);
    } else{
        return num2;
    }
}

console.log(`The bigger number is ${BiggerNum(30,31)}`);
console.log(`The bigger number is ${BiggerNum(380,31)}`);
console.log(`The bigger number is ${BiggerNum(380,380)}`);