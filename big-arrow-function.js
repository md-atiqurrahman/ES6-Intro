//arrow function for multiple parameter and single line code
const add = (num1,num2,num3) => num1 + num2 + num3;

const result = add(15,15,15);
// console.log(result);

//arrow function for one parameter 
const doubleIt = (num1) => num1 * 2;

const value = doubleIt(16);
// console.log(value);

const tripleIt = num1 => num1 * 3;

const value2 = tripleIt(15);
// console.log(value2);

//arrow function for  no parameter
const nameString = () => 'my name is Atiqur Rahman';

const getName = nameString();
// console.log(getName);

// arrow function for multiline code 
const getValue = (x,y,z) =>{
    const add = x + y;
    const difference = y - z;
    const multiple = add * difference;
    const division = multiple / 10;
    return division; 
}

const totall = getValue(5,6,4);
console.log(totall);