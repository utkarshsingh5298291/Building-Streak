function calculateSum(){
    let a=0;
    for(let i=0; i<1000000000;i++){
        a=a+i;
    }

    return a;
}

const beforeDate =new Date();
const beforeTimeInMs= beforeDate.getTime();
calculateSum();



const afterDate =new Date();
const afterTimeInMs= beforeDate.getTime();

console.log(afterTimeInMs-beforeTimeInMs);
function currentTimePrint(){
    console.log(new Date().getTime());
}

setInterval(currentTimePrint, 10000);
