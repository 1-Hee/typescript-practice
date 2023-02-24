declare let obj: {
    name: string | number;
};
declare let fx: (x: string) => number;
type MyTuple = [boolean, string];
type MyType1 = {
    name: string;
    age: number;
};
declare let otherTuple: MyTuple;
type User = {
    name: string;
    [key: string]: string;
};
declare let myUser: {
    name: string;
    introduce: string;
    address: string;
};
declare class classUser {
    name: string;
    constructor(name: string);
}
