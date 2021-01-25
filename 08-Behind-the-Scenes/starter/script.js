'use strict';


// console.log(me);
// console.log(job);
// console.log(year);


// var me = 'Juan';
// let job = 'teacher';
// const year = 1991;


// console.log(numProducts);

// if (!numProducts)deleteShooppingCart();

// var numProducts = 10;

// function deleteShooppingCart(){
//     console.log('All Products deleted');
// }

var firstName = "Matilda";

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.year);
    },
    greet : () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
}

jonas.greet();