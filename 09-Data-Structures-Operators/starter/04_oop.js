// TODO Methods

// let rabbit = {};
// rabbit.speak = function(line){
//     console.log(`The rabbit says ${line}`);
// };

// rabbit.speak("I'm alive");

// function speak(line) {
//     console.log(`The ${this.type} rabbit says ${line}`);
// };

// let whiteRabbit = { type: 'white', speak };
// let hungryRabbit = { type: 'hungry', speak };

// whiteRabbit.speak("'Oh my ears and whiskers, how late late it's getting'");
// hungryRabbit.speak("'I could use a carrot right now.'");

// speak.call(hungryRabbit, `'Burp!'`)



// function normalize(){
//     console.log(this.coords.map(n => n / this.lenght));
// }

// normalize.call({coords: [0,2,3], lenght: 5});


// TODO Prototypes

// console.log(Object.getPrototypeOf({}) == Object.prototype);

// console.log(Object.getPrototypeOf(Object.prototype));

// console.log(Object.getPrototypeOf(Math.max) ==
//     Function.prototype);

// console.log(Object.getPrototypeOf([]) ==
//     Array.prototype);

// let protoRabbit = {
//     speak(line){
//         console.log(`The ${this.type} rabbit says '${line}'`);
//     }
// };

// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = 'killer';
// killerRabbit.speak('SKREE!');



// function makeRabbit(type){
//     let rabbit = Object.create(protoRabbit);
//     rabbit.type = type;
//     return rabbit;
// }

// function Rabbit(type){
//     this.type = type;
// }


// Rabbit.prototype.speak = function(line){
//     console.log(`The ${this.type} rabbit says '${line}'`);
// };

// let weirdRabbit = new Rabbit('weird');


class Rabbit {
    constructor(type){
        this.type = type;
    }
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit('killer');
let blackRabbit = new Rabbit('black');

// let object = new class {getWord(){return 'hello'; }};
// console.log(object.getWord());

// TODO Overriding derived properties

Rabbit.prototype.teeth = 'small';
// console.log(killerRabbit.teeth);

killerRabbit.teeth = 'long, sharp and bloody';
// console.log(killerRabbit.teeth);

// console.log(blackRabbit.teeth);

// console.log(Rabbit.prototype.teeth);

// console.log(Array.prototype.toString == Object.prototype.toString);

// TODO Maps

Rabbit.prototype.toString = function(){
    return `a ${this.type} rabbit`
};

// console.log(String(blackRabbit));

let sym = Symbol('name');