'use strict';

const JOURNAL = require('./journal');

require('/home/clr23/Documents/javascript_bootcamp/09-Data-Structures-Operators/starter/journal.js');
// TODO Objects
let day1 = {
    squirrel: false,
    events: ["work", "touched", "tree", "pizza", "running"]
};


// console.log(day1.squirrel);
// ? Objects methods

let anObject = {
    left: 1,
    right: 2
};

// console.log(anObject);
// delete anObject.left;
// console.log(anObject);

// 
// console.log('left' in anObject);
// console.log('right' in anObject);

// console.log(Object.keys(anObject));

let objectA = { x: 1, y: 2 }
Object.assign(objectA, { y: 3, z: 5 });
// console.log(objectA);

// * Using arrays to store objects

// let journal = [
//     {
//         events: ["work", "touched tree", "pizza",
//             "running", "television"],
//         squirrel: false
//     },
//     {
//         events: ["work", "ice cream", "cauliflower",
//             "lasagna", "touched tree", "brushed teeth"],
//         squirrel: false
//     },
//     {
//         events: ["weekend", "cycling", "break", "peanuts",
//             "beer"],
//         squirrel: true
//     },
//     /* and so on... */
// ];

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };
// console.log(object1 === object2);
// console.log(object1 === object3);

object1.value = 15;
// console.log(object1 === object2);
// console.log(object1, object2);

// let journal = [];

// function addEntry(events, squirrel) {
//     journal.push({ events, squirrel })
// }

// addEntry(["work", "touched tree", "pizza", "running",
//     "television"], false);
// addEntry(["work", "ice cream", "cauliflower", "lasagna",
//     "touched tree", "brushed teeth"], false);
// addEntry(["weekend", "cycling", "break", "peanuts",
//     "beer"], true);

// console.log(journal);


// function phi(table) {
//     return (table[3] * table[0] - table[2] * table[1]) /
//         Math.sqrt((table[2] + table[3]) *
//             (table[0] + table[1]) *
//             (table[1] + table[3]) *
//             (table[0] + table[2]));
// }



// console.log(phi([76, 9, 4, 1]));


var journal = [];

function addEntry(events, squirrel) {
    journal.push({ events, squirrel });
}

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}








function tableFor(event, journal){
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let index = 0;
        let entry = journal[i];
        if(entry.events.includes(event)) index +=1;
        if(entry.squirrel) index +=2;
        table[index] +=1;
    }
    return table;
    
}





function journalEvents(journal){
    let events = [];
    for (const entry of journal) {
        for(let event of entry.events){
            if(!events.includes(event)){
                events.push(event);
            }
        }
    }
    return events;
}

// for(let [index, event] of journalEvents(JOURNAL).entries()){
//     console.log(`${index + 1} ${event} : `, phi(tableFor(event, JOURNAL)));
// }

const events = journalEvents(JOURNAL);


for(let event of events){
    let table = tableFor(event, JOURNAL);
    let correlation = phi(table);
    if(correlation > 0.1 || correlation < -0.1){
        console.log(event + `:`, correlation);
    }
}



function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}

var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
