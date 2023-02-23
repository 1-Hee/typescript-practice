var h1 = document.getElementById("id");
// 타입스크립트에서는 narrowing이 필요함.
if (h1 instanceof Element) {
    h1.innerHTML = 'hello world!';
}
// as를 통해 강제로 가능
var h2 = document.getElementById("id2");
h2.innerHTML = '1234';
// ? 를 통해서 null 안정성(?) 추가
var h3 = document.getElementById("id3");
if ((h3 === null || h3 === void 0 ? void 0 : h3.innerHTML) != undefined) { // null 대신 undefined
    h3.innerHTML = '4567';
}
// 타입스크립트에서 이미 구현되어 있는 Element
var a = document.getElementById("a1");
a.href = 'www.naver.com'; // ok
