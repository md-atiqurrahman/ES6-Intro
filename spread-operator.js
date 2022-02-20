const numbers = [12, 13, 14, 15 , 16];

// const max = Math.max(numbers);
numbers.push(17);
const max = Math.max(...numbers);
// console.log(max);
const numbers2 = [...numbers];
console.log(numbers2);
