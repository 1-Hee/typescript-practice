// 함수 type alias, 함수 자체가 alias

type myfuncType = (value: string) => number;

let myfx2:myfuncType = function (a) {
    return 10;
}

// object with function

type myfxType2 = {
    name: string,
    age: number,
    plus: myfuncType,
    printName:(x:any)=>void
}

let myObj2: myfxType2 = {
    name: 'hello',
    age: 13,
    plus: (x: string) => {
        console.log(x);
        return 1;
    },
    printName: (x: any) => {
        console.log(x)
    }
}

console.log(myObj2.name);
console.log(myObj2.age);

myObj2.plus('hello');
myObj2.printName('kim-min-jun');