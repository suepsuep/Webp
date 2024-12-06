function plus(a, b) {
    return a+b;
}
function minus(a, b) {
    return a-b;
}

let p = plus;
console.log("10+20=%d", p(10,20));

// 함수를 parameter로 받는 함수
function calculate(a, b, func){
    return func(a, b);
}

// 함수를 넘겨서 계산함
console.log(calculate(10, 20, minus));
console.log(calculate(10, 20, plus));

