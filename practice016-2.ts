// export 용 모듈

// 타입스크립트의 변수의 export
export let myVariable:number = 13;


// 타입스크립트의 타입의 export
export type someType = string | number;

// 여러 타입들을 한번에 export 할 때;
export namespace MyNameSpace {
    export type MyType1 = string | number;
}


// 과거 문법
// module namespace MyNameSpace2 {
//     export type MyType2 = string;
// }

export namespace MyNameSpace2 {
    export type MyType2 = string;
}

// interface의 export;
export interface MyInterface1 {
    name: string,
    age:number
}

// namespace로 묶어서 타입 & interface도 사용 가능

export namespace MyNameSpace3 {
    export type MyType3 = number;
    export interface MyInterface2 {
        name: string,
        age: number,
    }
}