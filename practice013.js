// narrowing 2
// undefined도 들어올 수 있을 때 에러(?) 핸들링
function narrFunc1(value) {
    if (value && typeof value === 'string') {
    }
}
function narrFunc2(animal) {
    // in keyword
    if ('swim' in animal) { // is Fish?
    }
    else if ('fly' in animal) { // is Bird?
    }
}
// class 에서 narrowing
var myFish = /** @class */ (function () {
    function myFish() {
    }
    return myFish;
}());
var myBird = /** @class */ (function () {
    function myBird() {
    }
    return myBird;
}());
function narrFunc3(animal) {
    if (animal instanceof myFish) {
    }
    else if (animal instanceof myBird) {
    }
}
function printVehicle(x) {
    if (x.wheel === '4개') {
    }
    else if (x.wheel === '2개') {
    }
}
