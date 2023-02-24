// 함수의 never type
// 함수에서 리턴을 허용하지 않음
// 함수의 endpoint가 없어야 함
// js 함수는 기본적으로 return undefined를 가짐


// 에러가 발생하는 경우
function errFunc(): never{
    throw new Error();
}

// 무한루프인 경우
function loopFunc(): never{
    while (true) {
        
    }
}

// 타입스크립트에서 논리적으로 존재할 수 없는 if 절을 사용하려고 할 경우 등장
function stringFunc(value: string) {
    if (typeof value === 'string') {
        console.log(value);        
    } else { // 타입이 string으로 한정되어 있으므로 이런 경우가 존재할 수 없음
        console.log(value); // type => never
    }
}


let forceFunc = function () {
    
    throw new Error()
}