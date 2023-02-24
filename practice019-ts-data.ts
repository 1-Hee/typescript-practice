
// 타입스크립트의 일반 변수가 locally 하게 작동하고 싶다면
// 빈 export 구문을 추가해주면 됨.
export {}

// 타입스크립트의 기본 특징
// 그냥 변수를 선언해두면 ambient module(글로벌 모듈) 이 됨
var myTsData1 = 10;

// 반대로 로컬 파일 중 일부만 글로벌 모듈로 만들고 싶을 때
declare global {
    type Dog = string; // 모든 ts 파일에서 사용 가능
}
