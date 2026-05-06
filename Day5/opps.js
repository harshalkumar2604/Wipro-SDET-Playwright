class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a sound.`);
    }  
}
const dog = new Animal("simba");
const cat = new Animal("ruby");

dog.speak();
cat.speak();