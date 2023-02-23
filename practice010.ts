// class

class Person {
    data = 0;
    name:string;
    constructor(name:string) {
        this.name = name;
    }
    personFx(name:string):void {
    }
}

let p1 = new Person('jo');
let p2 = new Person('kim');

console.log(p1.data);
console.log(p2.data);

Person.prototype.personFx
    = function (name: string) { console.log(name) };

p1.personFx(p1.name);
p2.personFx(p2.name);

// repo 1

class Car {
    model: string;
    price: number;
    constructor(model: string, price: number) {
        this.model = model;
        this.price = price;
    }
    toString() {
        console.log(`[ model = ${this.model}, price = ${this.price} ]`);
    };
    tax() {
        console.log(`your price is : ${this.price / 10}`);
    }
}

let sonata = new Car('sonata', 1300);
console.log(sonata);
sonata.toString();
sonata.tax();

class Word {
    num: number[] = [];
    str: string[] = [];
    constructor(...args:(string|number)[]) {
        args.forEach((e) => {
            if (typeof e === 'string') this.str.push(e);
            else if (typeof e === 'number') this.num.push(e);
        })
    }
}


let myWord = new Word(1, 2, '3', '4');
console.log(myWord.num);
console.log(myWord.str);


