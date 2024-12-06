let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'child';
        console.log(childMessage);
        console.log(globalMessage);
    }
    printAnother();
}
printMessage();