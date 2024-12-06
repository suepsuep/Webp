const printYes = function() {
    console.log('yes');
}

const printNo = () => { console.log('no'); }

function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    }
    else 
        printNo();
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);
