const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 78,
    height: 1.68,
    calcBMI: function () {
        this.bmi = this.weight / (this.height ** 2);
    },
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.weight / (this.height ** 2);
    },
}

mark.calcBMI();
john.calcBMI();

// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI.Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m
// tall.

const compareBmi = (person1, person2) => {
    if (person1.bmi > person2.bmi) {
        console.log(`${person1.firstName}'s BMI (${person1.bmi}) is higher than ${person2.firstName}'s (${person2.bmi})`);
    }else if(person2.bmi > person1.bmi){
        console.log(`${person2.firstName}'s BMI (${person2.bmi}) is higher than ${person1.firstName}'s (${person1.bmi})`);
    }
}

compareBmi(mark, john);