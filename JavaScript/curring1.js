function greet(greeting, name) {
    console.log(greeting + ", " + name);
}

greet('hello', 'no-eul');
greet('hello', 'world!');

// 커링
function greet2(greeting) {
    return function(name) {
        console.log(greeting + ", " + name);
    }
}

let hello = greet2('hello');
hello('no-eul');
hello('world!');

let g_m = greet2('good morning');
g_m('no-eul');

const greet3 = greeting => name => console.log(greeting + ", " + name);
let hello2 = greet3('hello');
hello2('noeul');