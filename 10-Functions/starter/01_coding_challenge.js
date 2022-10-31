'use strict';

const validAnswer = function (input) {
    return (typeof (input) === 'number' && (input >= 0 && input <= 3))
}

const asking = function () {
    let answer = Number(prompt(`${this.question}\n${this.options.join('\n')} \n (Write option number)`))
    if (validAnswer(answer)) {

        this.answers[answer]++

    } else {
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
        this.displayResults('string')
    },
    displayResults: function (type = 'string') {
        if (type === 'string') {

            console.log(`Poll results are ${this.answers.join(', ').trim()}`)

        } else if (type === 'array') {
            console.log(this.answers)
        }
    }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

poll.displayResults.call({ answers: [5, 2, 3] }, 'array')
poll.displayResults.call({ answers: [5, 2, 3] }, 'string')
