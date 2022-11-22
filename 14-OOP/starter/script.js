'use strict';


// TODO: Contstructor functions and the "new" opetator

const Person =  function(firstName, birthYear){

    // Instance properties
    this.firstName = firstName,
    this.birthYear = birthYear

    this.calcAge = function(){
        console.log(2022 - this.birthYear)
    }
}

const jonas = new Person('Jonas', 1991)


jonas.nickname = 'javascript redentor'

console.log(jonas)

const matilda = new Person('Matilda', 1994)

matilda.nickname = 'psyco'

console.log(matilda)


console.log(jonas instanceof Person)

console.log(matilda.calcAge())