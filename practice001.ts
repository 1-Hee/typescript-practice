// 타입스크립트의 타입 선언
let obj: { name: string | number } = { name: "kim" };

obj = { name: 1 };

console.log(obj);
