'use strict';

const validAnswer = function (input) {
    return (typeof(input) === 'number' && (input >= 0 && input <= 3))
}

const asking = function(){
    let answer = Number(prompt(`${this.question}\n${this.options.join('\n')} \n (Write option number)`))
    if(validAnswer(answer)){
        console.log("Valid answer!")
        this.answers[answer]++
        console.log(this.answers)
    }else{
        asking.apply(poll)
    }
}

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer: function () {
        asking.apply(poll)
    },
    displayResults: function(type){

    }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))