var a=1;
a=2;
//console.log("Welcome to javascript");
console.log(a);
//
let firstName="Utkarsh";
let age=26;
let isMarried= false;

console.log("this persons name is " + firstName +"and their age is " + age);


//if else statement  
if (isMarried==true)
{
console.log(firstName + " is Married");
}
else{
    console.log(firstName + " is not Married");

}

//loop

let answer=0;
for(let i=1;i<=100;i++)
{
    answer=answer+i;
}
console.log(answer);

//arrays and objects

let person1="utkarsh";
let person2="singh";
let person3="rishu";

const array=["utkarsh","singh","rishu"];
const ages=[11,23,44];

for(let num=0;num<=ages.length-1;num++){

if(ages[num]%2!=0){
    console.log(ages[num] +" Odd");
}
else{
    console.log(ages[num] +" Even");
}
}

//why we need object in place of arrays

//1st using array
const person01="utkarsh";
const gender01="male";

const person02="rishu";
const gender02="male";

const person03="deepti";
const gender03="female";

const personArray=["utkarsh","rishu","deepti"];
const genderArray=["male","male","female"];

for(let i=0;i<personArray.length;i++)
{
    if(genderArray[i]=="male")
    {
        console.log(personArray[i]);
    }
}
//now using objects

const user1={
    firstName:"Utkarsh",
    gender:"male"
}

const user2={
    firstName:"Rishu",
    gender:"male"

}

console.log(user1["gender"]);

//or all objects in one

const allUsers=[
    {
    firstName:"Utkarsh",
    gender:"male"
    },
    {
    firstName:"Rishu",
    gender:"male"
    },
    {
    firstName:"deepti",
    gender:"female"
    }
]
for(let i=0;i<allUsers.length;i++)
{
    if(allUsers[i]["gender"]=="male")
    {
        //nested array of an object
        console.log(allUsers[i]["firstName"]);
    }
}