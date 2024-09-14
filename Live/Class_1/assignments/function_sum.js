function findSum(a,b){
//do things with the input and return output
    return a+b;
}
console.log(findSum(2,3))

//another way

function sumV(c,d){
    const value=c+d;
    return value;
}

const value= sumV(1,1);
console.log(value);

//----------------------------------------displayResults-///function calling as argument///------------------------------------------------------------
function sum(num1,num2,fnToCall){

    let result =num1+num2;
  //  return result;
  fnToCall(result);

}
function displayResult(data){
    console.log("Result of the sum is: " +data);
}
function displayResultPassive(data){
    console.log("Sum's result is is: " +data);
}

const ans=sum(1,2,displayResult);
//displayResult(ans);