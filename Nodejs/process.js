console.log('argv # of parameters:', process.argv.length);
console.dir(process.argv);

process.argv.forEach(function(item, index) {
    console.log(index + ':', item);
});

console.dir(process.env);