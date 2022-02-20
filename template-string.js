//3 ways to declare a string
const myName = 'atiqur rahman';
const myName = "atiqur rahman";
const myName = `atiqur rahman`;
//write multiple line string in old way
const myHobby = 'my name is Atiqur Rahman\n'+
'my age is 21 year.\n'+
'my hobby is watching movie\n'+
'my hobby is also also hangout in different places.'
// console.log(myHobby);

//write multiple line template-string with ES6
const myFourthHobby = 'watching movie';

const myHobbyList = `My first hobby is gradening.
my second hobby is hangout with frinend.
my third hobby is travelling in new places.
my fourth hobby is ${myFourthHobby}.`

console.log(myHobbyList);