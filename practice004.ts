// 타입스크립트의 함수 선언

// 일반 함수
function fx1(x:number):number {
    return x + 2;
}

// 화살표 함수
const fx2 = (x: number): number => {
    return x + 2;
}

console.log(fx1(2)); // 4
console.log(fx2(3)); // 5

// 함수 전용 타입 void
function fx3(x: number): void {
    //return x + 1; // error
    console.log('입력값은', x);
}
// fx3(); // error

// 입력해도 되고 안되게 하고 싶을 때
// 타입스크립트에서 ? 는 설정한 type에 undefined를 추가하는 경우임
function fx4(x?: number): void {
    if(x) console.log('입력값은', x)
}
fx4();
fx4(5);

// 입력을 안하면 기본값(default)을 부여하고 싶을 때
function fx5(x: number = 3): number{
    return x;
} 
console.log('기본값은', fx5());

// 유니온 타입에서 타입 narrowing을 통해 컴파일 오류 해결 가능
function fx6 (x: number | string): number{

    if (typeof x === 'number') { // type을 narrowing
        return x + 1;        
    } else {
        return 1;
    }
}

// narrowing을 위한 연산자
// in -> 속성명 in 오브젝트
// typeof -> typeof x === 'string'
// instanceof -> x instanceof Object

// narrowing 예시 2
function fx7(x: number | string):void {
    let arr: number[] = [];
    if (typeof x === 'number') {
        arr.concat(x);
    }    
}

// type aseertion, 타입을 일시 변환

function fx8(x: number | string) {
    let arr: number[] = [];
    arr[0] = x as number;
    // as 의 용도
    // 1. narrowing 시 사용
    // 2. union을 단일 타입으로 바꾸는 것임 string -> object로 바꾸는 것이 아님!
    // 3. 들어오는 값이 확실히 알 경우에만 사용
    // 4. as 문법을 쓰면 타입스크립트의 장점을 온전히 누릴 수 없음
    // as 문법 과거형 <number>

    let name: string = 'kim';
    
}

// report1
const convertNumberArray = (arr: (string | number)[]):number[] => {
    let convertedArray: number[] = [];
    arr.forEach((e) => {
        if (typeof e === 'string') {
            convertedArray.push(Number(e));
        } else {
            convertedArray.push(e);
        }
    });
    return convertedArray;    
}

console.log(convertNumberArray([1, '2', 3]));

// report2
type teachSubject = {
    subject:(string|string[])
}

let teacher1:teachSubject = { subject: 'math' }
let teacher2:teachSubject = { subject: ['math', 'english'] }
let teacher3:teachSubject = { subject: ['science', 'korean', 'art'] }

const whatIstLastSubject = (obj: teachSubject): string => {
    if (typeof obj.subject === 'string') return obj.subject;
    else {
        let lastSubject:string|unknown = obj.subject.pop();
        if (typeof lastSubject == 'string') return lastSubject;
        else return "잘못된 객체 유형";
    }
}

console.log(whatIstLastSubject(teacher1));
console.log(whatIstLastSubject(teacher2));
console.log(whatIstLastSubject(teacher3));