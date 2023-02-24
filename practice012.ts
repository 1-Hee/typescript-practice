// 함수의 rest parameter

function myfunc1(...arg: (string | number)[]): void {
    // arg.forEach((e) => {
    //     console.log(e);
    // })    
    console.log(arg);    
}

// 함수의 매개변수가 가변적일 때
myfunc1(1, 2, 3, 4);

// rest parameter 의 용례 2
// 배열의 간편복사
let myArray1 = [1, 2, 3, 4];
let myArray2 = [4, 5, 6, 7];
let myArray3 = [...myArray1, ...myArray2];
console.log(myArray3); // myArray1 + myArray2를 한 꼴

// destructuring
let [vx1, vx2] = ['hello', 'world'];

// object destructuring
let obj1 = { student: 'jane', std_age: 20 };
// 정확한 표현형
// let { student:student, std_age:std_age } = obj1;
// 속성명과 변수 명이 같다면 생략 가능
let { student, std_age } = obj1; 
console.log(student, std_age);

type stdObj = {
    student: string,
    std_age:number
}
function stdFunc({ student, std_age }:stdObj) {
    console.log(student, std_age);
}

stdFunc(obj1);

// 숫자 여러개 입력하면 최대 값을 return 해주는 함수
const getMax = (...args: number[]): number => {
    if (!args) console.log("잘못된 형식");
    else if (!args.length){
        console.log("입력된 값이 없습니다.");
    } else {
        args.sort();
        return args[args.length - 1];
    }        
    return -1;    
}

console.log(getMax());
console.log(getMax(1, 2, 3));
console.log(getMax(6, 3, 7, 2));


// repo 2
type customUser = {
    user: string,
    comment: number[],
    admin: boolean;
}

let cObj1:customUser = { user: 'kim', comment: [3, 5, 4], admin: false };

    
const printCustomUserInfo = ({ user, comment, admin }: customUser) => {
    console.log(user, comment, admin);    
}

printCustomUserInfo(cObj1);


// repo3
type WineInfo = (number | string | boolean)[];
let wineObj = [40, 'wine', true];

const printWineInfo = (wi: WineInfo) => {
    if (wi.length >= 3) {
        let [liquid, name, hasItem] = wi;
        console.log(liquid, name, hasItem);
    } else console.log("배열의 길이가 2보다 작거나 같습니다");
}

printWineInfo(wineObj);