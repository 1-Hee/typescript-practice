export {}

// object의 signature

interface StringOnly {
    [key :string]:string // 한줄에 처리도 가능
}

interface StringSig1 {
    age:number,
    // [key: string]:string, // 이건 age가 모든 문자열에 속해있는건데 얘만 number라는것은 논리적으로 말 X 
    [key: string]:string|number,
}

interface StringSig2 {
    age:'10',
    // [key: string]:string, // 이건 age가 모든 문자열에 속해있는건데 얘만 number라는것은 논리적으로 말 X 
    [key: string]:string|number,
}


let user:StringOnly = {
    name: 'kim',
    age:'20',
    location:'seoul'
}

let objList:StringOnly = {
    0:'kim', // key -> string으로 인식
    1:'jo',
    2:'123',
}

// object가 중첩된 상황이라면?
interface MyObjType {
    // 'font-size':{
    //     'font-size':{
    //         'font-size': number
    //     }
    // } // ok
    'font-size': MyObjType | number, // recursive한 type 지정 가능, 2 중첩 3중첩이든 가능함!
}
let css = {
    'font-size':{
        'font-size':{
            'font-size': 14
        }
    }
}


// repo1

interface AnsObj {
    [key:string]:string | number
}

let obj1:AnsObj = {
    model : 'k5',
    brand : 'kia',
    price : 6000,
    year : 2030,
    date : '6월',
    percent : '5%',
    dealer : '김차장',
}
console.log(obj1);

interface AnsObj2 {
    // 'font-size':AnsObj2 | number,
    [key:string]:AnsObj2 | number
}

let obj2:AnsObj2 = {
    'font-size': 10,
    'secondary' : {
        'font-size' : 12,
        'thrid' : {
            'font-size' : 14
        }
    }
}

console.log(obj2);