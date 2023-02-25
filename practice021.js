// implements 문법의 확장, 클래스의 타입 확인
var MyCar = /** @class */ (function () {
    function MyCar(model) {
        this.price = 1000;
        this.model = model;
    }
    return MyCar;
}());
var someCar = new MyCar('sonata');
// class 객체에 implements 한다고 해서 자동 형변환은 일어나지 않음
// 따라서, 개발자가 직접 체크해주어야 함
var YourCar = /** @class */ (function () {
    function YourCar() {
    }
    return YourCar;
}());
