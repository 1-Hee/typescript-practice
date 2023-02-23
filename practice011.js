var std = { name: 'hello' };
var tc = { name: 'yellow', age: 13 };
console.log(std);
console.log(tc);
var obj123 = { name: 'hey', score: 123 };
console.log(obj123);
var Product = { brand: 'samsung', serial: 1234, model: ['TV', 'phone'] };
var basket = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
var myVaccum = { product: '청소기', price: 7000, card: false };
var myModule = {
    plus: function (num1, num2) {
        return num1 + num2;
    },
    minus: function (num1, num2) {
        return num1 - num2;
    }
};
console.log(myModule.plus(1, 2)); // 3
console.log(myModule.minus(3, 2)); // 1
