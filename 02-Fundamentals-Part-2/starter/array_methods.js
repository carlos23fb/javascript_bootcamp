const friends = ['Miguel', 'Steven', 'Peter'];
friends.push('Juan');
console.log(friends);

friends.unshift('Manuel');
console.log(friends);

friends.pop();
friends.shift();
console.log(friends);

console.log(friends.includes('Miguel'));
console.log(friends.includes('Roberto'));