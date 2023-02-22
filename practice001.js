// 1. 타입스크립트의 변수의 타입 선언
var obj = { name: "kim" }; // string 또는 number
obj = { name: 1 };
console.log(obj);
// 2. 타입 스크립트 함수의 타입 선언
var fx = function (x) {
    return Number(x) * 2;
};
var otherTuple = [true, "hello world!"];
// ex)
var myUser = { name: "foo", introduce: "hello im foo", address: "korea" };
// 5. class 의 타입 지정
var classUser = /** @class */ (function () {
    function classUser(name) {
        this.name = name;
    }
    return classUser;
}());
