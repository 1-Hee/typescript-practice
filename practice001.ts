// 1. 타입스크립트의 변수의 타입 선언
let obj: { name: string | number } = { name: "kim" }; // string 또는 number

obj = { name: 1 };

console.log(obj);

// 2. 타입 스크립트 함수의 타입 선언
let fx = function (x: string): number {
  return Number(x) * 2;
};

// 3. 사용자 정의 타입 선언과 사용
type MyTuple = [boolean, string]; // 처음은 boolean, 두번째는 string
type MyType1 = { name: string; age: number };

let otherTuple: MyTuple = [true, "hello world!"];

// 4. Object의 속성
type User = {
  name: string; // 이렇게 일일히 적기에는 귀찮을 때
  [key: string]: string; // 이렇게 적어서 확장성 확보 가능
};

// ex)
let myUser = { name: "foo", introduce: "hello im foo", address: "korea" };

// 5. class 의 타입 지정
class classUser {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
