// implements 문법의 확장, 클래스의 타입 확인


interface CarType {
    model:string,
    price:number
}

class MyCar implements CarType{ // class 에 컴파일 옵션을 추가하는 느낌
    model:string;
    price:number = 1000;
    constructor(model:string){
        this.model = model;
    }
}
let someCar = new MyCar('sonata');


// class 객체에 implements 한다고 해서 자동 형변환은 일어나지 않음
// 따라서, 개발자가 직접 체크해주어야 함
class YourCar implements CarType{
    model:string;
    // model; // 이렇게 쓰면 컴파일 오류 나긴하지만 실행은 가능함.
    // 그러나 이 때의 타입은 any 타입이 되며, 자동 형변환 발생 X
    price:number;

}