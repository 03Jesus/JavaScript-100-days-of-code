document.write(`<h1> OOP </h1>`);
document.write(`<h2> 1. Class with a constructor </h2>`);
class Animal {
    constructor(kind, age, color) {
        this.kind = kind;
        this.age = age;
        this.color = color;
        this.info = `This is a ${this.kind}, it is ${this.age} years old and its color is ${this.color}`;
        /*
        This is for select the object
        this.{prop} says that the object will have a property called {prop}
        and the value of this property will be the value of the parameter in the constructor
        */
    }
}
const dog = new Animal("dog", 5, "black");
document.write(`
class Animal { <br>
    constructor(kind, age, color) { <br>
        this.kind = kind; <br>
        this.age = age; <br>
        this.color = color; <br>
    } <br>
} <br>
let dog = new Animal("dog", 5, "black"); <br>
`)
console.log(dog);
document.write(`<P> ${dog.info} </P>`);

document.write(`<h2> 2. Class with a method </h2>`);
document.write(`<p> The method is a function inside a class </p>`);
class Animal2 {
    constructor(kind, age, color) {
        this.kind = kind;
        this.age = age;
        this.color = color;
    }
    info() {
        return `This is a ${this.kind}, it is ${this.age} years old and its color is ${this.color}`;
    }
}
document.write(`
class Animal { <br>
    constructor(kind, age, color) { <br>
        this.kind = kind; <br>
        this.age = age; <br>
        this.color = color; <br>
    } <br>
    info() { <br>
        return \`This is a \${this.kind}, it is \${this.age} years old and its color is \${this.color}\`; <br>
    } <br>
} <br>
let dog = new Animal("dog", 5, "black"); <br>
`)
document.write(`<p>Now we can use the method info() to get the info of the object</p>`);
const dog2 = new Animal2("dog", 5, "black");
console.log(dog2);
document.write(`<P> ${dog2.info()} </P>`);

document.write(`<h2> 3. Inheritance and polymorphism </h2>`);
document.write(`<p> Inheritance is when a class inherits the properties and methods of another class </p>`);
document.write(`<p> Polymorphism is when a class has a method with the same name as a method in another class </p>`);
document.write(`<p> Let's suppose we have a class called Animal and we want to make it bark like a dog </p>`);
document.write(`<p> We can't modify the class Animal because it is used by other classes, for example a cat can't bark </p>`);
document.write(`<p> We can create a class called Dog that inherits the properties and methods of the class Animal </p>`);

class Dog extends Animal2 {
    constructor(kind, age, color, race) {
        super(kind, age, color);
        this.race = race;
    }
    bark() {
        return "Woof!";
    }
}
document.write(`
class Dog extends Animal { <br>
    constructor(kind, age, color, race) { <br>
        super(kind, age, color); <br>
        this.race = race; <br>
    } <br>
    bark() { <br>
        return "Woof!"; <br>
    } <br>
} <br>
`)
document.write(`<p>Now we can use the method bark() to make the dog bark</p>`);
const dog3 = new Dog("dog", 5, "black", "labrador");
console.log(dog3);
document.write(`<P> ${dog3.info()} </P>`);
document.write(`<P> dog barking ${dog3.bark()} </P>`);

document.write(`<h2> 4. Static methods </h2>`);
document.write(`<p> Static methods are methods that can be used without creating an object </p>`);
document.write(`<p> They're used when the method doesn't need to use the properties of the object </p>`);

class Dog2 extends Animal {
    constructor(kind, age, color, race){
        super(kind,age,color);
        this.race = race;
    }
    static bark(){
        return "Woof!";
    }
}
document.write(`
class Dog2 extends Animal { <br />
    constructor(kind, age, color, race){ <br />
        super(king,age,color); <br />
        this.race = race; <br />
    } <br />
    static bark(){ <br />
        return "Woof!"; <br />
    } <br />
} <br />
`)
document.write(`<p>Now we can use the method bark() to make a dog bark without instance a class Dog</p>`);
document.write(`<P> dog barking ${Dog2.bark()} </P>`);

document.write(`<h2> 5. Getters and setters </h2>`);
document.write(`<p> Getters and setters are used to get and set the properties of an object </p>`);
class Dog3 extends Animal2 {
    constructor(kind,age,color,race) {
        super(kind, age, color);
        this.race = race;
    }
    set setRace(newRace) {
        this.race = newRace;
    }
    get getRace() {
        return this.race;
    }
}
const dog4 = new Dog3("dog", 5, "black", "labrador");
document.write(`
class Dog3 extends Animal { <br />
    constructor(kind,age,color,race) { <br />
        super(kind, age, color); <br />
        this.race = race; <br />
    } <br />
    set setRace(newRace) { <br />
        this.race = newRace; <br />
    } <br />
    get getRace() { <br />
        return this.race; <br />
    } <br />
} <br />
`)
dog4.setRace = "bulldog";
document.write(`<P> ${dog4.info()} </P>`);
document.write(`<P> ${dog4.getRace} </P>`);
