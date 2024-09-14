function sum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=i;
    }
    return ans;
}
function findSum(){
    return findSum(100);
}

setTimeout(sum, 1000);
console.log("hello world");


const fs=require('fs');

fs.readFile("a.text", "utf-8", function(err,data){
    console.log(data);
})

console.log("hi there");

let a=0;
for(let i=0; i<10000;i++){
    a++;

}
console.log("wooh");