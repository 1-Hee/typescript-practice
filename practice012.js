// 함수의 rest parameter
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function myfunc1() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    // arg.forEach((e) => {
    //     console.log(e);
    // })    
    console.log(arg);
}
// 함수의 매개변수가 가변적일 때
myfunc1(1, 2, 3, 4);
// rest parameter 의 용례 2
// 배열의 간편복사
var myArray1 = [1, 2, 3, 4];
var myArray2 = [4, 5, 6, 7];
var myArray3 = __spreadArray(__spreadArray([], myArray1, true), myArray2, true);
console.log(myArray3); // myArray1 + myArray2를 한 꼴
// destructuring
var _a = ['hello', 'world'], vx1 = _a[0], vx2 = _a[1];
// object destructuring
var obj1 = { student: 'jane', std_age: 20 };
// 정확한 표현형
// let { student:student, std_age:std_age } = obj1;
// 속성명과 변수 명이 같다면 생략 가능
var student = obj1.student, std_age = obj1.std_age;
console.log(student, std_age);
function stdFunc(_a) {
    var student = _a.student, std_age = _a.std_age;
    console.log(student, std_age);
}
stdFunc(obj1);
// 숫자 여러개 입력하면 최대 값을 return 해주는 함수
var getMax = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args)
        console.log("잘못된 형식");
    else if (!args.length) {
        console.log("입력된 값이 없습니다.");
    }
    else {
        args.sort();
        return args[args.length - 1];
    }
    return -1;
};
console.log(getMax());
console.log(getMax(1, 2, 3));
console.log(getMax(6, 3, 7, 2));
var cObj1 = { user: 'kim', comment: [3, 5, 4], admin: false };
var printCustomUserInfo = function (_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
};
printCustomUserInfo(cObj1);
var wineObj = [40, 'wine', true];
var printWineInfo = function (wi) {
    if (wi.length >= 3) {
        var liquid = wi[0], name_1 = wi[1], hasItem = wi[2];
        console.log(liquid, name_1, hasItem);
    }
    else
        console.log("배열의 길이가 2보다 작거나 같습니다");
};
printWineInfo(wineObj);
