/*
let weather = 75;

if(weather < 70){
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary!');
}


let name = 'David'

if (name !== 'David'){
    console.log('Hello, my name is', name);
} else {
    console.log('Hello, is your name', name +'?');
}

let name= 'aUTuMN';

if(name[0] !== name[0].toUppercase){
    console.log('autumn')
} else {
    console.log('Autumn');
}
*/

let myName = 'aUTuMN';
console.log(myName[0].toUpperCase());

if(myName[0] == myName[0].toUpperCase()){
    console.log('Made it')
} else {
    console.log('Wrong spelling');
}

let age = 26;
let a = 'Yay! You can vote!';
let b = 'Yay! You can drink!';
let c = 'Yay! You can rent a car!';

if (age >= 18 && age <= 20) {
   console.log(a);
 } else if (age >= 21 && age <= 24) {
   console.log(a,b);
 } else if (age >= 25) {
   console.log(a,b,c);
 } else {
   console.log('Sorry, you are too young to do anything.');
 }