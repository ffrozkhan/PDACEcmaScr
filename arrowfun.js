// function syntax// 

// const functionname =()=>{


//     
// }

const getData =(num1, num2)=> num1+num2;
const letData=(num1, num2)=> num1-num2;

console.log(getData(5,8));

console.log( "sum of given numbers are " + getData(56,60));

console.log("sum of 30 and 40 is" + getData(30,40));

console.log(`sum of 40 + 60=${getData(40,60)}`);
console.log(`sum of 40 - 60=${letData(40,60)}`);