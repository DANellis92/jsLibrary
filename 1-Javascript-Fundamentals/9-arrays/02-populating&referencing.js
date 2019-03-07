/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list;
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas

console.log(typeof list);

Why is that?  The definition of an object is a container that can hold multiple datatypes.  Arrays fit under that category.

What is an array?
  Has [] brackets
  Can hold multiple datatypes
  Great for listing
*/

let list = ['item', 'item2', 'item3'];

let list2 = ['orange', 'banana', 'oreos'];


let students = ['Tony', 'Marshall', 'Rhys',
    'Ray', 23, true, ['Ryan', 'Iesha', ['Randy', 'Trevor'], 'Amira']];
console.log(typeof students);
console.log(students instanceof Array);
console.log(students[2]);
console.log(students[6][1])

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

food.forEach((food, number) => {
    console.log(number);
    console.log(food)
})


let movies = ['HP&SS', 'HP&CS', 'HP&PoA', 'HP&GF']

movies.forEach((movie, number) => {
    console.log(movie);
    console.log(number)
})

let movies = ['HP&SS', 'HP&CS', 'HP&PoA', 'HP&GF']

movies.forEach((movie, number) => {
    console.log(movie);
    console.log(number)
})