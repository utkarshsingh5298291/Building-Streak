//callback
function calculate(a,b,arthmeticFunction){
    const ans=arthmeticFunction(a,b);
    return ans;

}
/*
    if(type=="sum"){
        const value=sum(a,b);
        return value;
    }
    else if(type=="minus"){
        const value=minus(a,b);
        return value;
    }
 
}
function sum(a,b){
    return a+b;
}
function minus(data){
    return a-b;
}
*/
function sum(a,b){
    return a+b;
}
function minus(a,b){
    return a-b;
}
const value= calculate(1,2,minus);
   
console.log(value);