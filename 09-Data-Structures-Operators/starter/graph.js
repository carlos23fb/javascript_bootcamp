const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');


const routes = [
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



// TODO Create empty graph

const adjacencyList = new Map();



// TODO Add node

function addNode(airport){
    adjacencyList.set(airport, []);
}

// TODO Add edge, undirected
function addEdge(origin, destination){
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}


airports.forEach(addNode);
routes.forEach(route  => addEdge(...route));


console.log(adjacencyList);