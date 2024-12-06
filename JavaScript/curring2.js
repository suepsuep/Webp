const coffeeMachine = liquid => espresso => `${espresso} + ${liquid}`;
const americanoMachine = coffeeMachine('water');
const latteMachine = coffeeMachine('milk');
const americano = americanoMachine('coffee bean');
const latte = latteMachine('coffee bean');

console.log('아메리카노: ', americano);
console.log('라떼: ', latte);