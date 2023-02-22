// 여러 종류의 타입을 선언하는 경우
let member: string | number = "kim";
let memberList: (number | string)[] = [1, "2", 3];

// 타입스크립트의 any -> 타입스크립트 변수를 자바스크립트 변수로!
let value: any = "13"; // 타입스크립트의 의미가 희석되고, 디버깅의 어려움이 증가할 가능성 有
let value2: unknown = 13; // safe한 any
let sentence: unknown = "hello";

let value3: number = value; // any라서 가능
// let value4: number = value2; // 선언 시 타입을 감지해 컴파일 오류 발생

// 타입스크립트의 연산
// 타입스크립트의 사칙연산은 number일 때 되도록 제한
value3 * 3;
// sentence + 12; // 문자열을 숫자 연산 못하도록 잡아줌

let myAge: string | number; // 새로운 union 타입이므로
// myAge + 1; // 컴파일 오류 발생

let user3: string = "kim";
let age3: number | undefined = undefined;
let married: boolean = false;
let cheolSoo: (string | number | undefined | boolean)[] = [user3, age3, married];

type School = {
  score: number[];
  teacher: string | unknown;
  friend: string[];
};

let school: School = {
  score: [100, 97, 24],
  teacher: "phil",
  friend: ["jo", " foo"],
};
