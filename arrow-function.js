//regular function no.1
function add1(num1,num2){
    return num1 + num2;
}

const result = add1(15,17);
// console.log(result);

//regular function no.2
const add2 = function add(num1,num2){
    return num1 + num2;
}

const value = add2(10,20);
// console.log(value);

//regular function no.3
const add3 = function(num1,num2){
    return num1 + num2;
}

const sum = add3(12,30);
// console.log(sum);


// ES6 arrow function
const add4 = (num1,num2) => num1 + num2;

const totall = add4(15,45);
console.log(totall);
