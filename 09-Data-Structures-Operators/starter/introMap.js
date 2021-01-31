const tags = 'Mexicana China Italiana Argentina'.split(' ');



const allMenu = [
    {
        tag : 'Mexicana',
        name : 'Tacos',
        orden : 5
    },
    {
        tag: 'China',
        name: 'Kimchi',
        orden: 1
    },
    {
        tag: 'China',
        name: 'Pollo Cantones',
        orden: 'Plato'
    }
]





const menuReg = new Map();



tags.map(tag => menuReg.set(tag, []))



// const addDish  = function(dish){
//     menuReg.get(dish.tag).push(dish)
// }


allMenu.map(dish => menuReg.get(dish.tag).push(dish));

// console.log(menuReg);




const menuSize = function(dish){
    const size = menuReg.get(dish).length;
    // menuReg.get(dish.tag).push('menu Size', size)
    menuReg.get(dish).push([{size: size}])
}



for(const tag of menuReg.keys()) menuSize(tag);
console.log(menuReg);


console.log(menuReg.has('Argentina'))
console.log(menuReg.size);