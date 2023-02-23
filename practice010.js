// class
var Person = /** @class */ (function () {
    function Person(name) {
        this.data = 0;
        this.name = name;
    }
    Person.prototype.personFx = function (name) {
    };
    return Person;
}());
var p1 = new Person('jo');
var p2 = new Person('kim');
console.log(p1.data);
console.log(p2.data);
Person.prototype.personFx
    = function (name) { console.log(name); };
p1.personFx(p1.name);
p2.personFx(p2.name);
// repo 1
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.toString = function () {
        console.log("[ model = ".concat(this.model, ", price = ").concat(this.price, " ]"));
    };
    ;
    Car.prototype.tax = function () {
        console.log("your price is : ".concat(this.price / 10));
    };
    return Car;
}());
var sonata = new Car('sonata', 1300);
console.log(sonata);
sonata.toString();
sonata.tax();
var Word = /** @class */ (function () {
    function Word() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        this.num = [];
        this.str = [];
        args.forEach(function (e) {
            if (typeof e === 'string')
                _this.str.push(e);
            else if (typeof e === 'number')
                _this.num.push(e);
        });
    }
    return Word;
}());
var myWord = new Word(1, 2, '3', '4');
console.log(myWord.num);
console.log(myWord.str);
