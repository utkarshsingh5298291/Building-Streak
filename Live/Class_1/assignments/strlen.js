function len(str){
    console.log(str.length);
}

len("utkarsh");


function findIndexOf(st, target){
    console.log(st.indexOf("singh"));
}

findIndexOf("utkarsh singh");

function getSlice(st, start, end){
    console.log(st.slice( start, end));
}

getSlice("utkarsh singh",0 ,5);

const str="hello world";
console.log(str.replace("hello","utk"));


const value="hi there check this"
const word=value.split(" ");


console.log(word)

const val= "            utkarsh singh  ";
console.log(val.trim());
console.log(val.toUpperCase());

console.log(parseInt("23.52"));
console.log(parseFloat("23.52"));


///////////////////////////////arrays/////////////////////////

const initialArray=[1,3,5,3];
const secondArray=[2,34,2];

initialArray.push(3);
console.log(initialArray);


initialArray.pop(3);
console.log(initialArray);


initialArray.shift();
console.log(initialArray);

initialArray.unshift(0);
console.log(initialArray);

const finalArray=(initialArray.concat(secondArray));
console.log(finalArray)
console.log("------------------break----------------");
for(let i=0;i<initialArray.length;i++){
    console.log(initialArray[i]);
}

function logThing(str){
    console.log(str);
}

initialArray.forEach(logThing);

//callbacks map filter find sort

