let url = require('url');

let curURL = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=web+programming');

let curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.dir(curURL);

let qs = require('querystring');
let param = qs.parse(curURL.query);
console.dir(param);
console.log('요청 파라미터의 query : %s', param.query);
console.log('원본 요청 파라미터 : %s', qs.stringify(param));