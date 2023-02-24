var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ts의 튜플 타입
var MyDog = ['poppy', true];
var MyDog2 = ['poppy']; // 가변적 가능!
// let MyDog3:[string, boolean?, number] = ['poppy']; // ?는 뒤에 작성해야함 여러개 작성도 가능한데 무조건 뒤쪽으로! 
console.log(MyDog);
function myDogFunction() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
myDogFunction(111, '222');
// spread 연산자
var arr = [1, 2, 3];
var arr2 = __spreadArray([4, 5], arr, true); // spread 시 타입!
var foodReview1 = ['교촌 허니콤보', 18700, true];
console.log(foodReview1);
// repo 2
var foodReview2 = ['동서녹차', 4000, true, true, false, true];
console.log(foodReview2);
// repo 3
function myTupleFunction() {
    var param = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param[_i] = arguments[_i];
    }
    console.log(param);
}
myTupleFunction('john', true, 'string', 123);
// repo 4
function mySotringFunction1() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var numberArr = [];
    var stringArr = [];
    var resultArr = [[], []];
    params.forEach(function (e) {
        if (typeof e === 'string')
            stringArr.push(e);
        else
            numberArr.push(e);
    });
    numberArr.sort();
    stringArr.sort();
    resultArr[0] = numberArr;
    resultArr[1] = stringArr;
    return resultArr;
}
console.log(mySotringFunction1(1, 2, '3', '4', 5, 6, '7', '8'));
