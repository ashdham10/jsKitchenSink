var name = "Ashley Denham";
console.log(name);


const states = 50;
console.log(states);


var x = 5;
var y = 4;
var z = y + x;
console.log(z);

var name= 'Ashley';
console.log(name.charCodeAt(0));
function firstLetter() {
if(true) {


}

}




//HELLO WORLD
function sayHello(hello) {
    console.log(hello);
}
var hello = "Hello World!";
console.log(sayHello(hello));

//Age Checker
var c = {
    name: 'Charles',
    age: 21
}
var a = {
    name: 'Abby',
    age: 27
}
var ja = {
    name: 'James',
    age: 18
}
var j = {
    name: 'John',
    age: 17
}
function checkAge(person) {
    console.log(person);
    if (person.age < 21) {
        console.log('Sorry ' + person.name + 
        ', you are not old enough to view this page!');
    }
}
console.log(checkAge(c));
console.log(checkAge(a));
console.log(checkAge(ja));
console.log(checkAge(j));


//Veggies
let veg = ['cucumber', 'carrots', 'celery']
for (let i of veg) {
    console.log(i);
}


//This freaking loop..D:<
var people = [{name:'John', age: 23} , 
{name:'Alice', age: 20} , {name:'Becca', age:30} , 
{name:'Matt', age: 26} , {name:'Anna', age: 19}];
for(let i = 0; i < people.length; i++) {
    // i = 0
    people[i];
    (checkAge(people[i]));

}

function getLength(str) {
    return str.length;
}
console.log(getLength('Hello World'));

if (getLength % 2 == 0) {
    console.log('The world is nice and even!')
}
if (getLength % 2 != 0) {
    console.log('The world is an odd place!')
}


