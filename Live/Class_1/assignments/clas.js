class Animal{
    constructor(name,legCount,speaks){
        this.name=name;
        this.legCount=legCount;
        this.speaks=speaks;
    }
    static myType(){
        console.log("Animal");
    }
    speak()
    {
        console.log("hi there " + this.speaks);
    }
}

let dog=new Animal("dog", 4, "bow bow");
let cat=new Animal("cat", 4 ,"meaow");
cat.speak();
//console.log(Animal.speak());

const currentDate= new Date();
console.log(currentDate.getDate());

console.log(currentDate.getMonth());

console.log(currentDate.getFullYear());

