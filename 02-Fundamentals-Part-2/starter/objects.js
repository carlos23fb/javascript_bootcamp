const juan = {
    firstName: 'Carlos',
    lastName: 'Becerra',
    birthYear : 1994,
    job: 'Student',
    friends : ['Carlos'],
    calcAge : function(){
        this.age = 2020 - this.birthYear;
    }
};

console.log(juan);


console.log(`${juan.firstName} has ${juan.friends.length} and his best friend is called ${juan.friends}`);