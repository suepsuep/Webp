// 함수형 프로그래밍 연습
const cart = [
    { item: "노트북", price: 1200000, quantity: 1 }, 
    { item: "마우스", price: 35000, quantity: 2 }, 
    { item: "키보드", price: 89000, quantity: 1 } 
];

let totalPrice = 0;
for (let i=0; i<cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
}
console.log(`Total Price: ${totalPrice}`);

totalPrice = 0;
cart.forEach(product => 
    totalPrice += product.price * product.quantity
);
console.log(`Total Price: ${totalPrice}`);


totalPrice = 0;
totalPrice = cart.reduce((a, b) => a + b.price * b.quantity, 0);
console.log(`Total Price: ${totalPrice}`);

const itemTotals = cart.map(product => {
    return {
        item: product.item,
        total: product.price * product.quantity
    };
});

console.log('제품별 금액:', itemTotals);

const names = ['alice', 'bob', 'charlie'];
const uppercasedNames = names.map( name => 
    name.toUpperCase());
console.log(uppercasedNames);

const capitalStartNames = names.map(name => 
    name.charAt(0).toUpperCase() + name.slice(1)
);

console.log(capitalStartNames);