// 타입스크립트의 변수의 타입 종류
let nickname: string = "joy";
let age: number = 10;
let isSelected: boolean = true;
// isSelected = 123; // error

// ts의 array
let members: string[] = ["kai", "foo", "joo"]; // 타입[] 이런 형식으로 타입 선언

// ts의 Object
let memberInfo: { name: string; age: number } = { name: "key", age: 13 };

// 타입스크립트는 일단 기본적으로 타입을 선언해줌
let tag = "hello";
// tag = 123; // 14번줄에서 이미 타입이 선언되었으므로 자동으로 컴파일 오류 발생

type Project = { member: string[]; days: number; isStart: boolean };

let newProject: Project = { member: ["kim", "jo", "lee"], days: 34, isStart: false };
