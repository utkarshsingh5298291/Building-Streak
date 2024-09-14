
function square(n){
    return n=n*n;
}


function cube(n){
    return n=n*n*n;
}


///callback////


function sumofsomething(a,b,callback){
    const val1=callback(a);
    const val2=callback(b);
    return val1+val2;
}
const ans=sumofsomething(2,2,square);
console.log(ans);
