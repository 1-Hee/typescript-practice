export {}
// 조건부 타입 생성기2, & infer

// 삼항 연산자
3 > 1 ? console.log('yes') : console.log('no');

// 삼항연산자를 이용한 타입 정리
type DynamicType1<T> = T;
let value1:DynamicType1<string> = 'hey';

// 조건식 type
type DynamicType2<T> = T extends string ? T : unknown; // type에서 사용하는 generic을 검사하는 조건식은 extends!

let value2:DynamicType2<string> = 'hey'; // string 
let value3:DynamicType2<number> = 'hey'; // unknown

// array 타입을 입력하면 array의 첫번째 타입을 리턴해주는 타입, 튜플등에도 응용 가능
// array가 아닐 경우 any 리턴
type FirstItem<T> = T extends any[]? T[0] : any;

let myItem1:FirstItem<string[]> = 'hey';
let myItem2:FirstItem<boolean> = true;

// infer, 타입을 추출하는 역할
type Person<T> = T extends string ? string : unknown;

// infer는 왼쪽 기준으로 뽑음
// 배열에서 특정 자료형을 추출할 때
type getFirstType<T> = T extends (infer R)[] ? R : unknown; // 배열 안의 자료형을 뽑기!

let myArray:getFirstType<string[]> = '1'; // string

// 함수의 리턴 타입을 추출할 대
type getReturnType<T> = T extends (() => infer R )? R : unknown;

let myReturn:getReturnType<() => number> = 1; // number

// 그러나, 리턴타입만 별도로 주는 문법도 존재!
type myReturn2 = ReturnType<()=> string>;
let myReturn3:myReturn2 = '123'; // string

// repo1
type InferType1<T> = T extends [string, ...any]? string : unknown;

let infer1 :InferType1<[string, number]>; // string
let infer2 :InferType1<[boolean, number]>;  // unknown


// repo2
type InferType2<T> = T extends ((x:infer R) => any) ? R : any;
let infer3:InferType2<(x:number)=>void> = 1;
let infer4:InferType2<(x:boolean)=>void> = true;


