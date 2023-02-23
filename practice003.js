// 여러 종류의 타입을 선언하는 경우
var member = "kim";
var memberList = [1, "2", 3];
// 타입스크립트의 any -> 타입스크립트 변수를 자바스크립트 변수로!
var value = "13"; // 타입스크립트의 의미가 희석되고, 디버깅의 어려움이 증가할 가능성 有
var value2 = 13; // safe한 any
var sentence = "hello";
var value3 = value; // any라서 가능
// let value4: number = value2; // 선언 시 타입을 감지해 컴파일 오류 발생
// 타입스크립트의 연산
// 타입스크립트의 사칙연산은 number일 때 되도록 제한
value3 * 3;
// sentence + 12; // 문자열을 숫자 연산 못하도록 잡아줌
var myAge; // 새로운 union 타입이므로
// myAge + 1; // 컴파일 오류 발생
var user3 = "kim";
var age3 = undefined;
var married = false;
var cheolSoo = [user3, age3, married];
var school = {
    score: [100, 97, 24],
    teacher: "phil",
    friend: ["jo", " foo"],
};
