const checkDogs = function(dogsJulia, dogsKate){
    
    const [...alldata] = [...dogsJulia, ...dogsKate]
    console.log(alldata)

    alldata.forEach((dog, num) =>{
        if(dog >= 3 ){
            console.log(`Dog number ${num+1} is an adult, and is ${dog} years old`)
        }else if(dog > 0 && dog <3){
            console.log(`Dog number ${num + 1} is still a puppy, and is ${dog} years old`)
        }
    })
}

const correctDogs = function(arr){
    return arr.slice(1, -2)
}

const julia = [3, 5, 2, 12, 7]


const kate = [4, 1, 15, 8, 3]


checkDogs(correctDogs(julia), kate)


