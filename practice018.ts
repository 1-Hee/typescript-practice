// ts의 튜플 타입
let MyDog:[string, boolean] = ['poppy', true];
let MyDog2:[string, boolean?] = ['poppy']; // 가변적 가능!
// let MyDog3:[string, boolean?, number] = ['poppy']; // ?는 뒤에 작성해야함 여러개 작성도 가능한데 무조건 뒤쪽으로! 
console.log(MyDog);

type myTupleType = [number, string];

function myDogFunction(...x:myTupleType){
    console.log(x)
}

myDogFunction(111,'222');

// spread 연산자
let arr:number[] = [1,2,3];
let arr2:[number, number, ...number[]] = [4,5, ...arr]; // spread 시 타입!

// repo 1
type FoodReview = [string, number, boolean];
let foodReview1:FoodReview = ['교촌 허니콤보', 18700, true];
console.log(foodReview1);

// repo 2
let foodReview2:[string, number, ...boolean[]] = ['동서녹차', 4000, true, true, false, true]
console.log(foodReview2);

// repo 3
function myTupleFunction(...param:[string, boolean, ...(string|number)[]]){
    console.log(param);
}
myTupleFunction('john', true, 'string', 123);

// repo 4

function mySotringFunction1(...params:[...(string|number)[]]):[[...number[]], [...string[]]]{
    let numberArr:number[] = [];
    let stringArr:string[] = [];
    let resultArr:[[...number[]], [...string[]]] = [[],[]];
    params.forEach((e)=>{
        if(typeof e ==='string') stringArr.push(e);
        else numberArr.push(e);
    })
    numberArr.sort();
    stringArr.sort();
    resultArr[0] = numberArr;
    resultArr[1] = stringArr;
    return resultArr;
}

console.log(mySotringFunction1(1,2,'3','4',5,6,'7','8'));
