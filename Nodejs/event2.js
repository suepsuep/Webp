function run1() {
    console.log('execute after 1 seconds');
}

function run2() {
    console.log('execute after 2 seconds');
}


console.log('start');
setTimeout(run2, 2000);
setTimeout(run1, 1000);
console.log('end');