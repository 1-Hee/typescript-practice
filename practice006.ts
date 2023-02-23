// type을 더욱 강력하게 Literal Types
let number1: 123; // 이거 가능
number1 = 123; // ok
// number2 = 112; // error

let userName: 'john' | 'wendy';
userName = 'john'; // ok
userName = "wendy"; // ok
// userName = 'jenny'; // error

// 함수에서 Literal Types
const fx9 = (value: 'hello'): 1 | 0 => {
    
    return 1    
}

// 가위/바위/보중 1개만 입력 가능
// 가위/바위/보 만 들어올 수 있는 array를 리턴해야 함
const RPSfx = (value:('가위'|'바위'|'보')):('가위'|'바위'|'보')[] => {
    
    return ['가위'];
}

let data = {
    name : 'kim'
}
type dtype1 = {
    name:'kim'
}
let data2: dtype1 = {
    name:'kim'
}

const myfx1 = (value: 'kim') => {
    
}


myfx1('kim'); //ok
// myfx1(data.name); // error, type = string!
myfx1(data2.name); // ok!


// object with as const
var data3 = {
    name :'kim'
} as const

// data3.name = 13; // error
myfx1(data3.name);

