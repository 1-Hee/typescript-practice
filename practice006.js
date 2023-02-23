// type을 더욱 강력하게 Literal Types
var number1; // 이거 가능
number1 = 123; // ok
// number2 = 112; // error
var userName;
userName = 'john'; // ok
userName = "wendy"; // ok
// userName = 'jenny'; // error
// 함수에서 Literal Types
var fx9 = function (value) {
    return 1;
};
// 가위/바위/보중 1개만 입력 가능
// 가위/바위/보 만 들어올 수 있는 array를 리턴해야 함
var RPSfx = function (value) {
    return ['가위'];
};
var data = {
    name: 'kim'
};
var data2 = {
    name: 'kim'
};
var myfx1 = function (value) {
};
myfx1('kim'); //ok
// myfx1(data.name); // error, type = string!
myfx1(data2.name); // ok!
// object with as const
var data3 = {
    name: 'kim'
};
// data3.name = 13; // error
myfx1(data3.name);
