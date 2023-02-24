// public, private, protected, static

class MyUser {
    public name: string; // 인스턴스들이 자유롭게 편집 가능, 안붙인 것과  기능은 같음
    private age: number = 13;
    constructor(name:string) {
        this.name = name;
    }
    toString():string{
        return `[ name = ${this.name}, age = ${this.age}]`;
    }
    getUserAge():number {
        return this.age;
    }
    setUserAge(age: number): void{
        this.age = age;
    }
}

let myuser1 = new MyUser('kim');
let myuser2 = new MyUser('park');
let myuser3 = new MyUser('jo');
console.log(myuser1.toString());

class MyPerson {
    constructor(public name:string) {
        
    }
}
let child = new MyPerson('kim');
console.log(child);
// proteceted 와 static;

class PublicUser {
    protected name: string = 'john';
    static PU_CONST = 10;
}

class Teacher extends PublicUser{
    private career: number = 13;
    sayName() {
        console.log(`my name is { ${this.name} } `);
    }    
}

let teacherJo = new Teacher();
teacherJo.sayName();

let puser1 = new PublicUser();
// 인스턴스로는 불가
console.log(PublicUser.PU_CONST);

class OfficeWorker {
    static skill: string = 'js'
    intro: string = `my best is ${OfficeWorker.skill}`;
}

let ow1 = new OfficeWorker();

console.log(ow1.intro);

OfficeWorker.skill = 'ts';
let ow2 = new OfficeWorker();

console.log(ow2.intro);

// repo1
class Postion {
    private static x = 10;
    public static y = 20;
    protected z = 30;
    // repo2
    plusX(num: number):void {
        Postion.x += num; // ?
    }
    printX() {
        console.log(Postion.x);
    }
}

class ThreePostion extends Postion{
    printZ() {
        console.log(this.z);
    }
}

console.log("----------");
let pos1 = new Postion();
// console.log(Postion.x); // X
console.log(Postion.y); // ok
// console.log(Postion.z); // X

// repo 2
pos1.plusX(3);
pos1.plusX(4);
pos1.printX();

let tpos2 = new ThreePostion();
tpos2.printZ(); // ok
// console.log(tpos2.z); // X
console.log(ThreePostion.y);
// console.log(ThreePostion.z); // X


// repo3

class Square {
    constructor(private width:number, private height:number, private color:string) {
        
    }
    draw() {
        // create element
        let randIdx = Math.random();
        let squareDiv = document.createElement('div');
        if ('style' in squareDiv) {
            squareDiv.style.position = 'relative';
            squareDiv.style.top = `${randIdx * 400}px`;
            squareDiv.style.left = `${randIdx * 400}px`;            
            squareDiv.style.width = `${this.width}px`;
            squareDiv.style.height = `${this.height}px`;
            squareDiv.style.background = `${this.color}`;            
            document.body.insertAdjacentElement('beforeend', squareDiv);                    
        }
    }
}

let square = new Square(30, 30, 'red');

// setInterval(() => {
//     document.body.innerHTML = ``;
//     for (let i = 0; i < 15; i++) {
//         square.draw();
//     }    
// }, 100);