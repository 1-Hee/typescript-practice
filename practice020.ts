// d.ts?
// 프로젝트에서 사용할 타입 정리하는데 사용됌
import {Age} from "./practice020p.d";

// d.ts 파일에 정의된 여러 타입 한번에 import할 수도 있음
// import * as module1 from "./practice020.d";

let myAge:Age = 123;

let myAge2:MyGlobalAge = 123;


// 이외에도 자바스크립트에서 자주 사용되는 타입들을 정리한 깃허브 문서
// Definitely Typed
// https://github.com/DefinitelyTyped/DefinitelyTyped