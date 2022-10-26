// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM(see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data(pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output(5 separate console.log outputs):
// underscoreCase
// firstName ✅
// someVariable ✅✅
// calculateAge ✅✅✅✅✅✅✅
// delayedDeparture ✅✅✅✅✅

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const my_button = document.querySelector("button")
const text_area = document.querySelector('textarea')


const camelCase = function (word) {
    const arr_word = word.trim().split('_')
    // console.log(arr_word)
    const [first, ...rest] = [...arr_word]
    // console.log(rest)
    const lower_first = first.toLowerCase()

    const arr_cap_words = []

    rest.forEach(word => {
        arr_cap_words.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
    })

    console.log([lower_first, ...arr_cap_words].join(''))

}


my_button.addEventListener('click', () => {
    const allwords = text_area.value.split('\n')

    allwords.forEach(word => {
        camelCase(word)
    })
})