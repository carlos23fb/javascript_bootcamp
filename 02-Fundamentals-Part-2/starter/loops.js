const carlos = [
    'Carlos',
    'Becerra',
    'Student',
    ['Carlos'],
    2020-1994,
    'Mexican'
]

const carlosTypes = [];

// carlos.forEach(element => {
//     console.log(element, typeof(element));
//     carlosTypes.push(typeof(element))
// });

// console.log(carlosTypes);




// for (let i = 0; i < carlos.length; i++){
//     if(typeof carlos[i] !== 'string') continue;

//     console.log(carlos[i], typeof(carlos[i]));
// }

for (let i = carlos.length-1; i >= 0 ; i--) {
    console.log(carlos[i], typeof (carlos[i]));
}