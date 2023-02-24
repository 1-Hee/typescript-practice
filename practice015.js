// public, private, protected, static
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyUser = /** @class */ (function () {
    function MyUser(name) {
        this.age = 13;
        this.name = name;
    }
    MyUser.prototype.toString = function () {
        return "[ name = ".concat(this.name, ", age = ").concat(this.age, "]");
    };
    MyUser.prototype.getUserAge = function () {
        return this.age;
    };
    MyUser.prototype.setUserAge = function (age) {
        this.age = age;
    };
    return MyUser;
}());
var myuser1 = new MyUser('kim');
var myuser2 = new MyUser('park');
var myuser3 = new MyUser('jo');
console.log(myuser1.toString());
var MyPerson = /** @class */ (function () {
    function MyPerson(name) {
        this.name = name;
    }
    return MyPerson;
}());
var child = new MyPerson('kim');
console.log(child);
// proteceted 와 static;
var PublicUser = /** @class */ (function () {
    function PublicUser() {
        this.name = 'john';
    }
    PublicUser.PU_CONST = 10;
    return PublicUser;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.career = 13;
        return _this;
    }
    Teacher.prototype.sayName = function () {
        console.log("my name is { ".concat(this.name, " } "));
    };
    return Teacher;
}(PublicUser));
var teacherJo = new Teacher();
teacherJo.sayName();
var puser1 = new PublicUser();
// 인스턴스로는 불가
console.log(PublicUser.PU_CONST);
var OfficeWorker = /** @class */ (function () {
    function OfficeWorker() {
        this.intro = "my best is ".concat(OfficeWorker.skill);
    }
    OfficeWorker.skill = 'js';
    return OfficeWorker;
}());
var ow1 = new OfficeWorker();
console.log(ow1.intro);
OfficeWorker.skill = 'ts';
var ow2 = new OfficeWorker();
console.log(ow2.intro);
// repo1
var Postion = /** @class */ (function () {
    function Postion() {
        this.z = 30;
    }
    // repo2
    Postion.prototype.plusX = function (num) {
        Postion.x += num; // ?
    };
    Postion.prototype.printX = function () {
        console.log(Postion.x);
    };
    Postion.x = 10;
    Postion.y = 20;
    return Postion;
}());
var ThreePostion = /** @class */ (function (_super) {
    __extends(ThreePostion, _super);
    function ThreePostion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThreePostion.prototype.printZ = function () {
        console.log(this.z);
    };
    return ThreePostion;
}(Postion));
console.log("----------");
var pos1 = new Postion();
// console.log(Postion.x); // X
console.log(Postion.y); // ok
// console.log(Postion.z); // X
// repo 2
pos1.plusX(3);
pos1.plusX(4);
pos1.printX();
var tpos2 = new ThreePostion();
tpos2.printZ(); // ok
// console.log(tpos2.z); // X
console.log(ThreePostion.y);
// console.log(ThreePostion.z); // X
// repo3
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        // create element
        var randIdx = Math.random();
        var squareDiv = document.createElement('div');
        if ('style' in squareDiv) {
            squareDiv.style.position = 'relative';
            squareDiv.style.top = "".concat(randIdx * 400, "px");
            squareDiv.style.left = "".concat(randIdx * 400, "px");
            squareDiv.style.width = "".concat(this.width, "px");
            squareDiv.style.height = "".concat(this.height, "px");
            squareDiv.style.background = "".concat(this.color);
            document.body.insertAdjacentElement('beforeend', squareDiv);
        }
    };
    return Square;
}());
var square = new Square(30, 30, 'red');
// setInterval(() => {
//     document.body.innerHTML = ``;
//     for (let i = 0; i < 15; i++) {
//         square.draw();
//     }    
// }, 100);
