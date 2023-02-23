let h1 = document.getElementById("id");
// 타입스크립트에서는 narrowing이 필요함.
if (h1 instanceof Element) {
    h1.innerHTML = 'hello world!';
}

// as를 통해 강제로 가능
let h2 = document.getElementById("id2") as Element;
h2.innerHTML = '1234';

// ? 를 통해서 null 안정성(?) 추가
let h3 = document.getElementById("id3");
if (h3?.innerHTML != undefined) { // null 대신 undefined
    h3.innerHTML = '4567';
}

// 타입스크립트에서 이미 구현되어 있는 Element
let a = document.getElementById("a1") as HTMLAnchorElement;
a.href = 'www.naver.com'; // ok


