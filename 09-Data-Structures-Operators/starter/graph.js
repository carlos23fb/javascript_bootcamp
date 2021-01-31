const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');


let routes = [
    ['PHX','LAX'],
    ['PHX','JFK'],
    ['JFK','OKC'],
    ['JFK','HEL'],
    ['JFK','LOS'],
    ['MEX','LAX'],
    ['MEX','BKK'],
    ['MEX','LIM'],
    ['MEX','EZE'],
    ['LIM','BKK']
];

routes = new Set(routes);
console.log(routes);

// TODO Create empty graph

const adjacencyList = new Map();



// // TODO Add node

// function addNode(airport){
//     adjacencyList.set(airport, []);
// }

// // TODO Add edge, undirected
// function addEdge(origin, destination){
//     adjacencyList.get(origin).push(destination);
//     adjacencyList.get(destination).push(origin);
// }


// airports.forEach(addNode);
// routes.forEach(route => addEdge(...route));


// airports.map(addNode);


// routes.map(route => addEdge(...route));


const addNode = function(airport){
    adjacencyList.set(airport, [])
}

airports.map(addNode);


const addEdge = function(origin, destination){
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}


routes.forEach(route => addEdge(...route))

console.log(adjacencyList);