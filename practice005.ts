let animal: string | number | undefined; // 타입 유형이 길어질 경우
type Animal = string | number | undefined; // type alias
type MyObject = { name: string, age: number };
// type alias 작성시 네이밍 규칙은 파스칼이다.

// const와 readonly
// Vanilla Js에서 const라는 예약어는 변수의 재할당을 막아준다.
// 하지만 그 변수가 객체일 경우 객체의 속성에 대한 변경을 막는 것 까지는 제한하지 못한다
// 타입스크립트에서는 객체의 속성도 변경을 제한할 수 있다.

type OurMember = {
    readonly name : string
}

const member2: OurMember = { name: '현준' }
console.dir(member2);
// member2.name = 'hey'; // 오류 발생

// 여러 가지 타입을 묶을 때, | , 유니온
type myType1 = string | number;
type myType2 = Object | undefined;
type myTpye3 = myType1 | myType2;

// 두가지 이상의 타입을 합쳐서 새로운 타입을 만드는 경우
// type 의 extends
type PosX = { x: number }
type PosY = { y: number }
type newType = PosX & PosY;

let postion: newType = { x: 10, y: 20 }; // 이렇게 응용 가능
// 타입은 const와 유사함 그래서 재정의가 불가함
// type myType1 = number; // error

// object 타입을 정의한 type alias를 두개 합칠 때 중복된 속성이 있다면?
type testObj1 = { x: string, y: number };
type testObj2 = { x: number, z: number };
type combineObj1 = testObj1 & testObj2;

// let cobj1:combineObj1 = {x:1, y:1, z:3} // 몰루?

type testObj3 = {
    color?: string,
    size: number,
    readonly position:number[]
}

type testObj4 = {
    name: string,
    phone: number,
    email: string
}

type testObj5 = testObj4 & { isAdult: boolean };

let testObj5val:testObj5 = {name:'jo', phone:123, email:'email@email.com', isAdult:true}
console.log(testObj5val);

