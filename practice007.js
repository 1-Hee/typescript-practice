// 함수 type alias, 함수 자체가 alias
var myfx2 = function (a) {
    return 10;
};
var myObj2 = {
    name: 'hello',
    age: 13,
    plus: function (x) {
        console.log(x);
        return 1;
    },
    printName: function (x) {
        console.log(x);
    }
};
console.log(myObj2.name);
console.log(myObj2.age);
myObj2.plus('hello');
myObj2.printName('kim-min-jun');
