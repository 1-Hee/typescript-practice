// narrowing 2
// undefined도 들어올 수 있을 때 에러(?) 핸들링
function narrFunc1(value: string | undefined) {
    if (value && typeof value === 'string') {
        
    }
}

// 서로다른 타입이 가능할 때
type Fish = { swim: string }
type Bird = { fly: string };

function narrFunc2(animal: Fish | Bird) {
    // in keyword
    if ('swim' in animal) { // is Fish?
        
    } else if ('fly' in animal) { // is Bird?
        
    }
}

// class 에서 narrowing
class myFish {
    swim: string;    
}
class myBird {
    fly: string;
}
function narrFunc3(animal: Fish | Bird) {
    if (animal instanceof myFish) {
        
    } else if (animal instanceof myBird) {
        
    }
}


// 두가지 타입이 속성명 까지 모두 같은 경우

type myCar = {
    wheel: '4개',
    color: string
}

type myBike = {
    wheel: '2개'
    color: string;    
}

function printVehicle(x: myCar | myBike) {
    if (x.wheel === '4개') {
        
    } else if (x.wheel === '2개') {
        
    }
}