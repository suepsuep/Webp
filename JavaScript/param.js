function changeValue(value) { // call by value
    value = value + 10;
    console.log('value='+value);
}

let kvalue = 10;
console.log(kvalue);
changeValue(kvalue);
console.log(kvalue);


function changeName(obj) { // call by reference
    obj.name = 'coder';
}

let ksd = { name: 'ksd' };

console.log(ksd);
changeName(ksd);
console.log(ksd);
